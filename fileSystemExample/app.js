const fs = require("fs").promises;

const data = {
  name: "Employee 1 name",
  salary: 2000,
};

async function mkDir() {
  try {
    await fs.mkdir("employees", { recursive: true });
    console.log("Klasör oluşturuldu.");
  } catch (err) {
    console.error(err);
  }
}

async function create() {
  try {
    await fs.writeFile(
      "employees/employees.json",
      JSON.stringify(data),
      "utf8"
    );
    console.log("Create işlemi tamam.");
  } catch (err) {
    console.error(err);
  }
}

async function read() {
  try {
    const fileData = await fs.readFile("employees/employees.json", "utf8");
    console.log(fileData);
  } catch (err) {
    console.error(err);
  }
}

async function update() {
  try {
    let fileData = await fs.readFile("employees/employees.json", "utf8");
    fileData = fileData.replace("Employee 1 name", "Batuhan");
    await fs.writeFile("employees/employees.json", fileData, "utf8");
    console.log("Dosya başarıyla güncellendi.");
  } catch (err) {
    console.error("Dosyaya yazılırken bir hata oluştu:", err);
  }
}

async function main() {
  await mkDir();
  await create();
  await read();
  await update();
  await read();
}

main();
