# Capturando impressões e cliques únicos para CaptureResponse

::: warning
Este código só foi testado para Pega Marketing 8.4
:::

Por padrão, o serviço [CaptureResponse](/reference/service-rest.html#captureresponse) não irá identificar se uma impressão ou clique é único dado o CustomerID enviado na requisição. Para corrigir isso, precisamos ajustar a regra que mapeia o resultado da interação do serviço. Primeiro, vamos precisar criar um Data Page para identificar se a resposta é única dado o contexto da requisição (se é impressão ou clique, por exemplo) e posteriormente definimos uma propriedade que indica que a resposta é "única" no processamento do serviço citado.

## Source

### Activity: Get unique response

**CL:** @baseclass  &middot; **ID:** GetUniqueResponse

#### Parameters

| Name | Data type | Required | In/Out |
|------|-----------|----------|--------|
| SubjectID | String | Yes | In |
| SubjectType | String | Yes | In |
| Issue | String | Yes | In |
| Group | String | Yes | In |
| Name | String | Yes | In |
| Outcome | String | Yes | In |
| CampaignID | String | No | In |

#### Pages & Classes

| Page name | Class |
|-----------|-------|
| UniqueResponsePage | Data-pxStrategyResult |

#### Definition

<table>
  <thead>
    <tr>
      <th></th>
      <th>Method</th>
      <th>Step page</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <td>Page-New</td>
      <td>UniqueResponsePage</td>
      <td>Cria página UniqueResponsePage.</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>
        Call GetUniqueResponse
        <table>
          <tr>
            <th colspan="2">Parameters</th>
          </tr>
          <tr>
            <td>SubjectID</td>
            <td>Param.SubjectID</td>
          </tr>
          <tr>
            <td>SubjectType</td>
            <td>Param.SubjectType</td>
          </tr>
          <tr>
            <td>Group</td>
            <td>Param.Group</td>
          </tr>
          <tr>
            <td>Issue</td>
            <td>Param.Issue</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Param.Name</td>
          </tr>
          <tr>
            <td>Outcome</td>
            <td>Param.Outcome</td>
          </tr>
          <tr>
            <td>WorkID</td>
            <td>Param.CampaignID</td>
          </tr>
          <tr>
            <td>isUniqueResponse</td>
            <td>Primary.pyIsAvailable</td>
          </tr>
        </table>  
      </td>
      <td>UniqueResponsePage</td>
      <td>Verifica se esta resposta é única.</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>Page-Remove</td>
      <td>UniqueResponsePage</td>
      <td>Remove a página temporária.</td>
    </tr>
  </tbody>
</table>

### Data Page: Get unique response

**ID:** D_GetUniqueResponse

#### Parameters

| Name | Data type | Required | In/Out |
|------|-----------|----------|--------|
| SubjectID | String | Yes | In |
| SubjectType | String | Yes | In |
| Issue | String | Yes | In |
| Group | String | Yes | In |
| Name | String | Yes | In |
| Outcome | String | Yes | In |
| CampaignID | String | No | In |

#### Definition

| Definition | Value |
|------------|-------|
| Structure | Page |
| Object type | @baseclass |
| Mode | Read-Only |
| Scope | Thread |

#### Load management

<input type="checkbox" disabled checked> Reload once per interaction

#### Data Sources

| No. | Source | Rule name |
|-----|--------|-----------|
| 1 | Activity | <div>GetUniqueResponse</div> <input type="checkbox" disabled checked> Pass current parameter page |

### Data Transform: Capture Response Data

::: warning
Copie esta regra da ruleset do Pega Marketing. Normalmente `PegaMKT-Engine`.
:::

**CL:** Int-PegaCDH-Container-Request  &middot; **ID:** CaptureResponseData

#### Definition


| | Action | Target | Relation | Source |
|-|--------|--------|----------|--------|
| Add Sibling Above | Set | Param.pySubjectType | equal to | D_CDHSubjectDictionary[DictionaryName:"Customer"].PrimaryLevelClass |
| 1.26 | Set | .pySubjectType | equal to | Param.pySubjectType |
| Add Sibling Below | Set | .IsUniqueResponse | equal to | D_GetUniqueResponse[SubjectID: Primary.CustomerID, SubjectType: Param.pySubjectType, Issue: .Issue, Group: .Group, Name: .Name, Outcome: .Outcome, CampaignID: .CampaignID].pyIsAvailable |