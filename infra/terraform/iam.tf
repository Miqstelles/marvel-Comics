resource "aws_s3_bucket_policy" "staging_policy" {
  bucket = aws_s3_bucket.staging_app.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "AllowCloudFrontReadOnly"
        Effect = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.staging_app.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.staging.arn
          }
        }
      }
    ]
  })

  depends_on = [
    aws_s3_bucket.staging_app,
    aws_cloudfront_distribution.staging
  ]
}
