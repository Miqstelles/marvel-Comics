# Infraestrutura gerada por IA — revisão obrigatória

Base de código: Commit 796c13bcbf9aba78e959688e534288d479aed427. Provider AWS 6.0.0.

Ambiente de staging isolado para a SPA React (marvel-Comics): bucket S3 com o build estático, distribuição CloudFront dedicada ao staging com HTTPS (ACM) e fallback de rota SPA, logs de acesso em bucket separado e observabilidade via CloudWatch. Staging usa o mesmo padrão de produção, mas com distribuição e bucket próprios, permitindo validar o build antes de publicar. Integração externa com a API Marvel permanece no cliente (premissa); chaves hardcodadas no código continuam sendo um risco a tratar à parte.

## Limites

- Custo não estimado. Valide custos, segurança, rede e capacidade antes de provisionar.
- Inspeção parcial: 21 trechos de 31 arquivos indexados foram enviados ao gerador; não é uma auditoria integral.
- Configure as variáveis obrigatórias de variables.tf, sem commitar segredos.
- Nenhum terraform plan/apply, build, deploy ou migração de dados foi executado.
- Configure backend remoto seguro para o state antes de aplicar.
- Chamadas encode(...) geradas pela IA podem ter sido convertidas automaticamente para jsonencode(...). Isso presume formato JSON mesmo fora de campos JSON conhecidos; revise cada ocorrência antes de aplicar.
- Terraform validate não verifica a conta AWS, permissões, disponibilidade ou custos.

## Recursos aprovados

- aws_s3_bucket.staging_app × 1: Hospedar o build estático da SPA no ambiente de staging
- aws_s3_object.staging_app_files × 1: Upload dos assets do build de staging (index.html, JS, CSS)
- aws_cloudfront_origin_access_control.staging_oac × 1: Permitir que o CloudFront acesse o bucket de staging sem exposição pública
- aws_cloudfront_distribution.staging × 1: Distribuir o app de staging via CDN com HTTPS e fallback de rota para SPA
- aws_s3_bucket.staging_logs × 1: Armazenar logs de acesso do CloudFront de staging
- aws_s3_bucket_policy.staging_policy × 1: Restringir acesso do bucket de staging apenas ao CloudFront
- aws_acm_certificate.staging_cert × 1: Certificado TLS para o domínio do ambiente de staging
- aws_acm_certificate_validation.staging_cert_validation × 1: Validação do certificado do staging
- aws_route53_record.staging_dns × 1: DNS do ambiente de staging
- aws_cloudwatch_log_group.staging_logs_group × 1: Logs e métricas operacionais do staging

Revise também todas as premissas da proposta confirmada antes de executar terraform plan.
