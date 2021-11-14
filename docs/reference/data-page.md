# Data Page

## `D_Range[stop: Integer]`

O Data Page `D_Range` é útil para criar listas de iteração sequenciais, o parâmetro `stop` representa o número de Pages que serão inseridas na Page List `.pxResults` do Data Page. Cada Page possuirá uma propriedade `.pyLineNumber` correspondente ao índice atual de cada Page.

### Example

| | Action | Target | Relation | Source |
|-|--------|--------|----------|--------|
| 1 | For Each Page In | D_Range[stop: 3].pxResults | | <input type="checkbox" disabled checked> Also use each page as source context |
| 1.1 | Set | Param.message | equal to | "Index: " + .pyLineNumber |

### Source

Crie as regras abaixo para utilizar o Data Page `D_Range`.

#### Data Transform: Create Range

**CL:** Code-Pega-List &middot; **ID:** CreateRange

##### Parameters

| Name | Data type | Required | In/Out |
|------|-----------|----------|--------|
| stop | Integer | Yes | In |
| current | Integer | No | In |

##### Definition

| | Action | Target | Relation | Source |
|-|--------|--------|----------|--------|
| 1 | When | Param.stop < 1 | | |
| 1.1 | Exit Data Transform | | | |
| 2 | Append and Map to | Primary.pxResults | a new page |
| 2.1 | Set | .pyLineNumber | equal to | Param.current |
| 3 | Set | Param.current | equal to | Param.current + 1 |
| 4 | When | Param.current <= Param.stop | | |
| 4.1 | Apply Data Transform | CreateRange | <input type="checkbox" disabled checked> Pass Current Parameter Page | |

#### Data Page: D_Range

**ID:** D_Range

##### Parameters

| Name | Data type | Required | In/Out |
|------|-----------|----------|--------|
| stop | Integer | Yes | In |

##### Definition

| Definition | Value |
|------------|-------|
| Structure | List |
| Object type | @baseclass |
| Mode | Read-Only |
| Scope | Thread |

##### Load management

<input type="checkbox" disabled checked> Reload once per interaction

##### Data Sources

| No. | Source | Rule name |
|-----|--------|-----------|
| 1 | Data Transform | CreateRange |