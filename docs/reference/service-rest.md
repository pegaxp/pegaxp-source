# Service REST

## Container

| Framework | Endpoint | Método |
|-----------|----------|--------|
| Pega Marketing | /prweb/api/PegaMKTContainer/V2/Container | POST |

### Descrição do serviço

Este serviço é responsável por chamar um Container para obter a melhor oferta a ser oferecida ao cliente. As ofertas retornam com um InteractionID que pode ser utilizado no serviço exposto que captura intrações, CaptureResponse.

### Estrutura do serviço

| Propriedade | Tipo | Descrição | Domínio¹ |
|-------------|------|-----------|----------|
| `SubjectID` | String | Identificação do cliente da interação. | Livre |
| `ContextName` | String | Contexto da interação, normalmente `Customer`. | Livre |
| `ContainerName` | String | Nome do Container associado à interação. | Livre |
| `Direction` | String | Tipo da direção da interação. | `Inbound`, `Outbound` |
| `Channel` | String | Tipo de canal da interação. | `Web`, `Mobile` |

### Exemplo de Request

```json
{
    "SubjectID": "87837589092",
    "ContextName": "Customer",
    "ContainerName": "Aplicativo",
    "Direction": "Inbound",
    "Channel": "Web"
}
```

### Exemplo de Response

```json
{
    "Status": "OK",
    "ContainerList": [
        {
            "Status": "OK",
            "ContainerName": "Aplicativo",
            "RankedResults": [
                {
                    "Group": "Vitrine",
                    "Issue": "Aquisicao",
                    "InteractionID": "-3108136487247955566",
                    "Category": "Banner",
                    "CustomerCost": 0.0,
                    "ContentFormat": "",
                    "Label": "Chave Pix",
                    "Benefits": "Esta action corresponde a um banner de chave pix.",
                    "WhyRelevant": "",
                    "Direction": "",
                    "Name": "ChavePix",
                    "ShortDescription": "Representa o banner para ativação de chave pix.",
                    "PaidAudienceName": "",
                    "Identifier": "/Aquisicao/Vitrine/ChavePix",
                    "Placement": "",
                    "Pricing": "",
                    "JourneyStage": "",
                    "JourneyStep": "",
                    "EligibilityDescription": "",
                    "Propensity": 0.0,
                    "AgentCompensation": 0,
                    "ClassIdentifier": "Offer",
                    "Priority": 0.0,
                    "Channel": "",
                    "BundleName": "",
                    "ImageURL": "",
                    "Rank": 1,
                    "BundleParent": "false",
                    "Variant": "Chave pix",
                    "Treatment": "",
                    "InternalCost": 0,
                    "CampaignID": "P-1",
                    "OfferValue": 0,
                    "ClickThroughURL": "",
                    "Journey": "",
                    "DecisionTime": "20211114T172010.524 GMT"
                }
            ]
        }
    ]
}
```

## CaptureResponse

| Framework | Endpoint | Método |
|-----------|----------|--------|
| Pega Marketing | /prweb/api/PegaMKTContainer/V2/CaptureResponse | POST |

### Descrição do serviço

Este serviço é responsável por capturar uma interação do cliente com uma oferta, principalmente Impressão (Impression) e Cliques (Clicked).

Por padrão, o serviço do Pega Marketing não contabilizará unique impression para as requisições neste serviço, [siga este guia](/guide/pega-marketing/capturing-unique-impression-and-click) para corrigir este comportamento.

### Estrutura do serviço

| Propriedade | Tipo | Descrição | Domínio¹ |
|-------------|------|-----------|----------|
| `ContainerName` | String | Nome do Container associado à interação. | Livre |
| `CustomerID` | String | Identificação do cliente associado à interação. | Livre |
| `RankedResults` | Array | Lista de ofertas que tiveram uma interação. | Livre |
| `RankedResults.Name` | String | Nome da oferta da interação. | Livre |
| `RankedResults.Issue` | String | Issue da oferta da interação. | Livre |
| `RankedResults.Group` | String | Group da oferta da interação. | Livre |
| `RankedResults.Rank` | Number | Rank da oferta retornado no [serviço de Container](#container). | Livre |
| `RankedResults.CampaignID` | String | Nome da campanha da interação. | Livre |
| `RankedResults.InteractionID` | String | Identificação da interação. | Livre |
| `RankedResults.Outcome` | String | Resultado da interação. | `Impression`, `Clicked` |
| `RankedResults.Channel` | String | Tipo de canal da interação. | `Web`, `Mobile` |
| `RankedResults.Direction` | String | Tipo da direção da interação. | `Inbound`, `Outbound` |

### Exemplo de request

```json
{
    "ContainerName": "Aplicativo",
    "CustomerID": "87837589092",
    "RankedResults": [
        {
            "Name": "ChavePix",
            "Issue": "Aquisicao",
            "Group": "Vitrine",
            "Rank": 1,
            "CampaignID": "P-1",
            "InteractionID": "-3108136487247955566",
            "Outcome": "Clicked",
            "Channel": "Web",
            "Direction": "Inbound"
        }
    ]
}
```

### Exemplo de response

```json
{
    "Status": "OK",
    "Message": "Response captured sucessfully"
}
```

¹ Os domínios devem ser exaustivos. A medida que formos tomando conhecimento, a lista será atualizada.
