# Comandos básicos do GIT

1. Clonar um repositório

```shell
git clone https://github.com/usuario/repositorio/
```

2. Configurar nome e email

```shell
git config --global user.name "Eduardo Barbosa"
git config --global user.email "dudis.ecb@gmail.com"
```

3. Verificar status do git

```shell
git status
```

4. Adicionar ao versionamento

```shell
git add nome_do_arquivo
```

5. Fazer commit das alterações

```shell
git commit -m "Comentario"
```

6. Atualizar com as alterações do GitHub

```shell
git pull origin nome_da_branch
```

7. Enviar alterações para o GitHub

```shell
git push origin nome_da_branch
```

8. Fazer merge com outra branch

```shell
git checkout branch_base
git merge branch_comparacao
```