resource "aws_cloudfront_origin_access_control" "staging_oac" {
  name                              = "staging-oac"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"

  depends_on = [aws_s3_object.staging_app_files]
}

locals {
  staging_cache_policy_id         = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  staging_origin_request_policy   = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf"
  staging_response_headers_policy = "67f57200-2751-4257-88ca-625d6935e344"
}

resource "aws_cloudfront_distribution" "staging" {
  enabled             = true
  comment             = "Distribuicao de staging da SPA marvel-Comics"
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  is_ipv6_enabled     = true

  aliases = [var.staging_domain_name]

  origin {
    domain_name              = aws_s3_bucket.staging_app.bucket_regional_domain_name
    origin_id                = "staging-s3-origin"
    origin_access_control_id = aws_cloudfront_origin_access_control.staging_oac.id
  }

  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    target_origin_id           = "staging-s3-origin"
    viewer_protocol_policy     = "redirect-to-https"
    compress                   = true
    cache_policy_id            = local.staging_cache_policy_id
    origin_request_policy_id   = local.staging_origin_request_policy
    response_headers_policy_id = local.staging_response_headers_policy
  }

  # Fallback de rota SPA: qualquer caminho desconhecido serve o index.html
  custom_error_response {
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 0
  }

  logging_config {
    bucket          = aws_s3_bucket.staging_logs.bucket_regional_domain_name
    include_cookies = false
    prefix          = "cloudfront-access-logs/"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.staging_cert.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  tags = var.staging_tags

  depends_on = [
    aws_s3_bucket.staging_app,
    aws_cloudfront_origin_access_control.staging_oac
  ]
}
