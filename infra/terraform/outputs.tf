output "staging_distribution_domain" {
  description = "Dominio CloudFront da distribuicao de staging."
  value       = aws_cloudfront_distribution.staging.domain_name
}

output "staging_app_bucket_arn" {
  description = "ARN do bucket S3 do app de staging."
  value       = aws_s3_bucket.staging_app.arn
}

output "staging_logs_bucket_arn" {
  description = "ARN do bucket de logs do CloudFront de staging."
  value       = aws_s3_bucket.staging_logs.arn
}

output "staging_cert_arn" {
  description = "ARN do certificado ACM de staging."
  value       = aws_acm_certificate.staging_cert.arn
}

output "staging_dns_fqdn" {
  description = "FQDN do record Route53 de staging."
  value       = aws_route53_record.staging_dns.fqdn
}
