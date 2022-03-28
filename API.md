# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Redirect <a name="Redirect" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect"></a>

A base redirect construct that takes source and destination ports and protocols.

Common use cases can be built from this construct

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer"></a>

```typescript
import { Redirect } from '@renovosolutions/cdk-library-elbv2-redirect'

new Redirect(scope: Construct, id: string, props: RedirectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps">RedirectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps">RedirectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.isConstruct"></a>

```typescript
import { Redirect } from '@renovosolutions/cdk-library-elbv2-redirect'

Redirect.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.Redirect.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-elbv2-redirect.Redirect.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### RedirectHttpHttps <a name="RedirectHttpHttps" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps"></a>

A construct that redirects HTTP to HTTPS for the given application load balancer.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer"></a>

```typescript
import { RedirectHttpHttps } from '@renovosolutions/cdk-library-elbv2-redirect'

new RedirectHttpHttps(scope: Construct, id: string, props: RedirectHttpHttpsProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps">RedirectHttpHttpsProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps">RedirectHttpHttpsProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.isConstruct"></a>

```typescript
import { RedirectHttpHttps } from '@renovosolutions/cdk-library-elbv2-redirect'

RedirectHttpHttps.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttps.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### RedirectHttpHttpsProps <a name="RedirectHttpHttpsProps" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps"></a>

Properties for the RedirectHttpHttps construct.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps.Initializer"></a>

```typescript
import { RedirectHttpHttpsProps } from '@renovosolutions/cdk-library-elbv2-redirect'

const redirectHttpHttpsProps: RedirectHttpHttpsProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The application load balancer this redirect applies to. |

---

##### `alb`<sup>Required</sup> <a name="alb" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectHttpHttpsProps.property.alb"></a>

```typescript
public readonly alb: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The application load balancer this redirect applies to.

---

### RedirectProps <a name="RedirectProps" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps"></a>

The properties for the base redirect construct.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.Initializer"></a>

```typescript
import { RedirectProps } from '@renovosolutions/cdk-library-elbv2-redirect'

const redirectProps: RedirectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The application load balancer this redirect applies to. |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.sourcePort">sourcePort</a></code> | <code>number</code> | The source port to redirect from. |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.sourceProtocol">sourceProtocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The source protocol to redirect from. |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.targetPort">targetPort</a></code> | <code>number</code> | The target port to redirect to. |
| <code><a href="#@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.targetProtocol">targetProtocol</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol</code> | The target protocol to redirect to. |

---

##### `alb`<sup>Required</sup> <a name="alb" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.alb"></a>

```typescript
public readonly alb: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The application load balancer this redirect applies to.

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.sourcePort"></a>

```typescript
public readonly sourcePort: number;
```

- *Type:* number

The source port to redirect from.

---

##### `sourceProtocol`<sup>Required</sup> <a name="sourceProtocol" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.sourceProtocol"></a>

```typescript
public readonly sourceProtocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol

The source protocol to redirect from.

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number

The target port to redirect to.

---

##### `targetProtocol`<sup>Required</sup> <a name="targetProtocol" id="@renovosolutions/cdk-library-elbv2-redirect.RedirectProps.property.targetProtocol"></a>

```typescript
public readonly targetProtocol: ApplicationProtocol;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationProtocol

The target protocol to redirect to.

---



