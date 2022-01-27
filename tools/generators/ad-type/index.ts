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
  adType: string;
}

export default async function (tree: Tree, schema: SchemaOptions) {
  const { className, constantName, fileName, name, propertyName } = names(
    schema.adType
  );

  const apiMainAdProject = readProjectConfiguration(tree, 'api-main-ad');
  const apiMainAdDetailProject = readProjectConfiguration(
    tree,
    'api-main-ad-detail'
  );

  const writeAdModuleDir = joinPathFragments(
    apiMainAdProject.sourceRoot,
    fileName
  );
  const writeAdDetailModuleDir = joinPathFragments(
    apiMainAdDetailProject.sourceRoot,
    fileName
  );

  const writeAdSchemaDir = joinPathFragments(
    'libs/api/main/shared/src/mongoose/schemas/ad'
  );
  const writeAdDetailSchemaDir = joinPathFragments(
    'libs/api/main/shared/src/mongoose/schemas/ad-detail'
  );

  const writeGeneralAdPolicyDir = joinPathFragments(
    'libs/api/main/shared/src/policies/general',
    'ad'
  );
  const writeGeneralAdDetailPolicyDir = joinPathFragments(
    'libs/api/main/shared/src/policies/general',
    'ad-detail'
  );

  const writeMembershipAdPolicyDir = joinPathFragments(
    'libs/api/main/shared/src/policies/membership',
    'ad'
  );
  const writeMembershipAdDetailPolicyDir = joinPathFragments(
    'libs/api/main/shared/src/policies/membership',
    'ad-detail'
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './ad-module'),
    writeAdModuleDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './ad-detail-module'),
    writeAdDetailModuleDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './general-ad-policy'),
    writeGeneralAdPolicyDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './general-ad-detail-policy'),
    writeGeneralAdDetailPolicyDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './membership-ad-policy'),
    writeMembershipAdPolicyDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './membership-ad-detail-policy'),
    writeMembershipAdDetailPolicyDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './ad-schema'),
    writeAdSchemaDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  generateFiles(
    tree,
    joinPathFragments(__dirname, './ad-detail-schema'),
    writeAdDetailSchemaDir,
    {
      tmpl: '',
      className,
      constantName,
      fileName,
      name,
      propertyName,
    }
  );

  {
    const content = tree.read('libs/api/main/shared/src/index.ts').toString();
    if (!content.includes(`'./policies/general/ad/${fileName}.policy'`)) {
      const idx =
        content.indexOf('//Policies - General') + '//Policies - General'.length;
      const rem = 0;

      const newContent =
        content.slice(0, idx) +
        `\nexport * from './policies/general/ad/${fileName}.policy';` +
        `\nexport * from './policies/general/ad-detail/${fileName}.policy';` +
        content.slice(idx + Math.abs(rem));

      tree.write('libs/api/main/shared/src/index.ts', newContent);
    }
  }

  {
    const content = tree.read('libs/api/main/shared/src/index.ts').toString();
    if (!content.includes(`'./policies/membership/ad/${fileName}.policy'`)) {
      const idx =
        content.indexOf('//Policies - Membership') +
        '//Policies - Membership'.length;
      const rem = 0;

      const newContent =
        content.slice(0, idx) +
        `\nexport * from './policies/membership/ad/${fileName}.policy';` +
        `\nexport * from './policies/membership/ad-detail/${fileName}.policy';` +
        content.slice(idx + Math.abs(rem));

      tree.write('libs/api/main/shared/src/index.ts', newContent);
    }
  }

  {
    const content = tree.read('libs/api/main/shared/src/index.ts').toString();
    if (!content.includes(`'./mongoose/schemas/ad/${fileName}.schema'`)) {
      const idx = content.indexOf('//Mongoose') + '//Mongoose'.length;
      const rem = 0;

      const newContent =
        content.slice(0, idx) +
        `\nexport * from './mongoose/schemas/ad/${fileName}.schema';` +
        `\nexport * from './mongoose/schemas/ad-detail/${fileName}.schema';` +
        content.slice(idx + Math.abs(rem));

      tree.write('libs/api/main/shared/src/index.ts', newContent);
    }
  }

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
