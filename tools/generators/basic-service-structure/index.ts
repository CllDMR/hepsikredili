import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';

interface SchemaOptions {
  name: string;
  project: string;
  directory?: string;
}

export default async function (tree: Tree, schema: SchemaOptions) {
  const project = readProjectConfiguration(tree, schema.project);
  const directory = schema.directory ?? './';
  const writeResourceDir = joinPathFragments(project.sourceRoot, directory);
  const writePolicyDir = joinPathFragments(
    'libs/api/main/shared/src/policies/general'
  );
  const { className, constantName, fileName, name, propertyName } = names(
    schema.name
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './resource'),
    writeResourceDir,
    {
      tmpl: '',
      project: schema.project,
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './policy'),
    writePolicyDir,
    {
      tmpl: '',
      project: schema.project,
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  const content = tree.read('libs/api/main/shared/src/index.ts').toString();

  const idx =
    content.indexOf('//Policies - General') + '//Policies - General'.length;
  const rem = 0;

  const newContent =
    content.slice(0, idx) +
    `\nexport * from './policies/general/${fileName}.policy';` +
    content.slice(idx + Math.abs(rem));

  tree.write('libs/api/main/shared/src/index.ts', newContent);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
