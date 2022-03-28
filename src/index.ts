import {
  aws_elasticloadbalancingv2 as elbv2,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * The properties for the base redirect construct
 */
export interface RedirectProps {
  /**
   * The application load balancer this redirect applies to
   */
  readonly alb: elbv2.ApplicationLoadBalancer;

  /**
   * The source port to redirect from
   */
  readonly sourcePort: number;

  /**
   * The source protocol to redirect from
   */
  readonly sourceProtocol: elbv2.ApplicationProtocol;

  /**
   * The target port to redirect to
   */
  readonly targetPort: number;

  /**
   * The target protocol to redirect to
   */
  readonly targetProtocol: elbv2.ApplicationProtocol;
}

/**
 * A base redirect construct that takes source and destination ports and protocols
 *
 * Common use cases can be built from this construct
 */
export class Redirect extends Construct {
  constructor(scope: Construct, id: string, props: RedirectProps) {
    super(scope, id);

    props.alb.addListener(`redirect${props.sourcePort}to${props.targetPort}`, {
      port: props.sourcePort,
      protocol: props.sourceProtocol,
      defaultAction: elbv2.ListenerAction.redirect({
        port: props.targetPort.toString(),
        protocol: props.targetProtocol,
      }),
    });
  }
}

/**
 * Properties for the RedirectHttpHttps construct
 */
export interface RedirectHttpHttpsProps {
  /**
   * The application load balancer this redirect applies to
   */
  readonly alb: elbv2.ApplicationLoadBalancer;
}

/**
 * A construct that redirects HTTP to HTTPS for the given application load balancer
 */
export class RedirectHttpHttps extends Construct {
  constructor(scope: Construct, id: string, props: RedirectHttpHttpsProps) {
    super(scope, id);

    new Redirect(this, 'httpToHttps', {
      alb: props.alb,
      sourcePort: 80,
      sourceProtocol: elbv2.ApplicationProtocol.HTTP,
      targetPort: 443,
      targetProtocol: elbv2.ApplicationProtocol.HTTPS,
    });
  }
}
