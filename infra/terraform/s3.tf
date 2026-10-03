resource "aws_s3_bucket" "staging_app" {
  bucket        = var.staging_bucket_name
  force_destroy = true

  tags = merge(var.staging_tags, {
    Name = var.staging_bucket_name
  })
}

resource "aws_s3_bucket" "staging_logs" {
  bucket        = var.staging_logs_bucket_name
  force_destroy = true

  tags = merge(var.staging_tags, {
    Name = var.staging_logs_bucket_name
  })
}

resource "aws_s3_object" "staging_app_files" {
  bucket        = aws_s3_bucket.staging_app.id
  key           = "index.html"
  content       = var.staging_index_content
  content_type  = "text/html"
  cache_control = "no-cache"

  depends_on = [aws_s3_bucket.staging_app]
}
