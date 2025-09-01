// Commitlint configuration object
const Configuration = {
  // Use conventional commit rules
  extends: ['@commitlint/config-conventional'],
  // Use the Atom preset for parsing commit messages
  parserPreset: 'conventional-changelog-atom',
  // Use the default commitlint formatter
  formatter: '@commitlint/format',

  // Rules configuration
  // Each rule is defined as: [level, applicable, value]
  // Level: 0 = disabled, 1 = warning, 2 = error
  // Applicable: 'always' or 'never'
  // Value: specific value for the rule
  rules: {
    // Allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bug fix
        'chore', // maintenance
        'docs', // documentation
        'style', // formatting
        'refactor', // code refactoring
        'perf', // performance improvement
        'test', // adding tests
        'build', // build system changes
      ],
    ],
    // Commit type must be lower-case
    'type-case': [2, 'always', 'lower-case'],
    // Allowed commit scopes
    'scope-enum': [2, 'always', ['build']],
    // Commit scope must be lower-case
    'scope-case': [2, 'always', 'lower-case'],
    // Commit subject must be lower-case
    'subject-case': [2, 'always', 'lower-case'],
    // Commit header must match the given pattern
    // Pattern: type: scope: subject
    'header-pattern': [2, 'always', /^([a-z]+): ([a-z]+): ([a-z0-9-]+)$/],
    // Commit header pattern is required
    'header-pattern-required': [2, 'always'],
  },
  // Ignore empty commit messages
  ignores: [(commit) => commit === ''],
  // Use default ignore rules
  defaultIgnores: true,
  plugins: [
    {
      rules: {
        'type-enum': ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            'Commit message must start with list , feat etc',
          ];
        },
      },
    },
  ],
};

// Export the configuration object as default
export default Configuration;
