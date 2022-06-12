// import path from 'path';
const path = require ('path')
// import { migrate, MigrateConfig } from 'ts-migrate-server';
const {migrate, MigrateConfig} = require('ts-migrate-server')

// import examplePluginJscodeshift from './example-plugin-jscodeshift';
// const examplePluginJscodeshift = require('example-plugin-jscodeshift')
// it will change content of the index.ts in the input folder
async function runMigration() {
  const inputDir = path.resolve(__dirname, 'input');

  const config = new MigrateConfig()
    // .addPlugin(examplePluginJscodeshift, {})


  const exitCode = await migrate({ rootDir: inputDir, config });

  process.exit(exitCode);
}

runMigration();