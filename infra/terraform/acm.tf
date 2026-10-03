# O ACM para CloudFront exige certificado em us-east-1; a região do provider
# deve ser configurada pelo operador de acordo (validacao DNS manual na hosted zone).
resource "aws_acm_certificate" "staging_cert" {
  domain_name       = var.staging_domain_name
  validation_method = "DNS"

  tags = var.staging_tags
}

# A validacao requer os registros DNS de challenge criados na hosted zone.
# Sem recurso aprovado para cria-los, a validacao ocorre com o registro
# publicado manualmente/fora deste conjunto.
resource "aws_acm_certificate_validation" "staging_cert_validation" {
  certificate_arn = aws_acm_certificate.staging_cert.arn

  depends_on = [aws_acm_certificate.staging_cert]
}

resource "aws_route53_record" "staging_dns" {
  zone_id = var.route53_zone_id
  name    = var.staging_domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.staging.domain_name
    zone_id                = aws_cloudfront_distribution.staging.hosted_zone_id
    evaluate_target_health = false
  }

  depends_on = [
    aws_acm_certificate_validation.staging_cert_validation,
    aws_cloudfront_distribution.staging
  ]
}
