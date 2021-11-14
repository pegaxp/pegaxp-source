# Fundação

De um ponto de vista técnico, toda aplicação Pega é uma aplicação de banco de dados, isto é, todos objetos da aplicação são persistidos em banco, inclusive assets como arquivos de estilo e JavaScript. Essa noção inicial é importante para sabermos medir performance de uma aplicação Pega.

A plataforma trata seus objetos como "regras", esses objetos são persistidos em tabelas do banco de dados (esquemas PegaRULES ou PegaDATA) e normalmente se traduzem em código Java em tempo de execução. O back-end do Pega é Java, todas as regras low-code são traduzidas em Java.

## Database

Para a instalação da plataforma, precisamos de um banco de dados relacional. A plataforma possui esquemas padrões para guardar seus objetos, em particular:

* **PegaRULES**, onde as regras são persitidas, de todas aplicações Pega, incluindo a própria aplicação de desenvolvimento;
* **PegaDATA**, onde se persiste instâncias de dados utilizados na aplicação.

## Ruleset

Para comportar as regras de uma aplicação, precisamos de uma Ruleset para associar e juntar as regras, assim, uma Ruleset é um conjunto de regras que podem, ou não ser _versionadas_.

Por exemplo, imagine que você tenha uma tabela do banco mapeada na aplicação, a configuração desta tabela na aplicação está atrelada a uma Ruleset e não necessita de um versionamento. Normalmente, regras de configuração não são versionadas.

### Ruleset version

Uma Ruleset version é uma versão de uma ruleset. Por exemplo, podemos ter uma Ruleset ```Vacinacao:01-01-01```, que possui regras específicas para essa versão, ```01-01-01```, para uma aplicação de campanha de vacinação. 

## Class

Uma Class define o contexto de uma regra, esse contexto ajuda a definir a estrutura de dados que será seguida.