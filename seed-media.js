const fs = require("fs");
const path = require("path");
const FormData = require("form-data");
const fetch = require("node-fetch");

const STRAPI_URL =
  process.env.STRAPI_URL ||
  "https://venus-strapi-backend-production.up.railway.app";
const API_TOKEN = process.env.STRAPI_API_TOKEN; // Railway environment variable

async function uploadFile(filePath, fileName) {
  try {
    const form = new FormData();
    const fileStream = fs.createReadStream(filePath);

    form.append("files", fileStream, fileName);

    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: form,
    });

    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Uploaded: ${fileName}`);
      return result;
    } else {
      console.log(`❌ Failed: ${fileName} - ${response.status}`);
      return null;
    }
  } catch (error) {
    console.error(`❌ Error uploading ${fileName}:`, error.message);
    return null;
  }
}

async function seedMediaLibrary() {
  const uploadsDir = path.join(__dirname, "public", "uploads");

  if (!fs.existsSync(uploadsDir)) {
    console.log("❌ No uploads directory found");
    return;
  }

  const files = fs
    .readdirSync(uploadsDir)
    .filter((file) => file.match(/\.(jpg|jpeg|png|gif|webp)$/i))
    .filter((file) => file !== ".gitkeep");

  console.log(`🚀 Found ${files.length} images to upload...`);

  for (const file of files) {
    const filePath = path.join(uploadsDir, file);
    await uploadFile(filePath, file);

    // Small delay to avoid overwhelming the server
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log("🎉 Media seeding completed!");
}

// Run if called directly
if (require.main === module) {
  seedMediaLibrary().catch(console.error);
}

module.exports = { seedMediaLibrary, uploadFile };
