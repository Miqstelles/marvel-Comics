resource "aws_cloudwatch_log_group" "staging_logs_group" {
  name              = "/staging/marvel-comics/app"
  retention_in_days = 14

  tags = var.staging_tags
}
