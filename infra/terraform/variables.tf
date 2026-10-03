variable "aws_region" {
  description = "Região AWS para os recursos de staging."
  type        = string
}

variable "staging_bucket_name" {
  description = "Nome global do bucket S3 que hospeda o build estático da SPA de staging."
  type        = string
}

variable "staging_logs_bucket_name" {
  description = "Nome global do bucket S3 de logs de acesso do CloudFront de staging."
  type        = string
}

variable "staging_domain_name" {
  description = "Domínio do ambiente de staging (ex.: staging.exemplo.com). Obrigatório para o ACM e o record Route53."
  type        = string
}

variable "route53_zone_id" {
  description = "ID da hosted zone Route53 onde o record de staging será criado."
  type        = string
}

variable "staging_index_content" {
  description = "Conteúdo HTML do index.html do build de staging (fornecido pelo pipeline, sem valores embutidos)."
  type        = string
}

variable "staging_tags" {
  description = "Tags aplicadas aos recursos de staging."
  type        = map(string)
  default = {
    environment = "staging"
  }
}
