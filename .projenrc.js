const { awscdk, javascript } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'master',
  name: '@renovosolutions/cdk-library-elbv2-redirect',
  description: 'AWS CDK Construct Library to help create redirects on AWS application load balancers',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-elbv2-redirect.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  stale: true,
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseWorkflow: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-aws-ipam',
    module: 'ipam',
  },
  publishToNuget: { // Currently seems to be broken. Jsii seems to incorrectly convert the CfnIPAMPool to CfnIpamPool
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.AWSIPAM',
  },
  jestOptions: {
    jestConfig: {
      timers: 'fake',
    },
  },
  workflowNodeVersion: '14.17.0',
  gitignore: ['**/__pycache__/**'],
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  labels: ['projen-upgrade'],
  workflow: true,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

project.synth();