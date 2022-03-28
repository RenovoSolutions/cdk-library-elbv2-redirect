import {
  App,
  Stack,
  aws_ec2 as ec2,
  aws_elasticloadbalancingv2 as elbv2,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Redirect, RedirectHttpHttps } from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'test', {
    env: {
      account: '1234567890', // example
      region: 'us-east-1',
    },
  });

  const vpc = new ec2.Vpc(stack, 'vpc');

  const alb = new elbv2.ApplicationLoadBalancer(stack, 'alb', {
    internetFacing: true,
    vpc,
  });

  new Redirect(stack, 'redirect', {
    alb,
    sourcePort: 8080,
    sourceProtocol: elbv2.ApplicationProtocol.HTTP,
    targetPort: 8443,
    targetProtocol: elbv2.ApplicationProtocol.HTTPS,
  });

  new RedirectHttpHttps(stack, 'redirectHttpHttps', {
    alb,
  });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});