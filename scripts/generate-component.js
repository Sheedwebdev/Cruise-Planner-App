import fs from "fs";

const componentName = process.argv[2];

if (!componentName) {
  console.log("Please provide a component name.");
  process.exit(1);
}

const validComponentName = /^[A-Z][A-Za-z0-9]*$/;

if (!validComponentName.test(componentName)) {
  console.log(
    "Error: Component name must use PascalCase (example: CruiseCard)."
  );
  process.exit(1);
}

const componentDirectory = `src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.log(`Error: ${componentName} already exists.`);
  process.exit(1);
}

const componentFile = `${componentDirectory}/${componentName}.jsx`;

const cssFile = `${componentDirectory}/${componentName}.module.css`;

const componentContent = `import styles from "./${componentName}.module.css";

function ${componentName}() {
  return (
    <div className={styles.container}>
      <h2>${componentName}</h2>
    </div>
  );
}

export default ${componentName};
`;

const cssContent = `.container {
  
}
`;

fs.mkdirSync(componentDirectory, { recursive: true });

fs.writeFileSync(componentFile, componentContent);

fs.writeFileSync(cssFile, cssContent);

console.log(`Created ${componentDirectory}`);
