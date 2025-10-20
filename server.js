const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// خدمة الملفات الثابتة
app.use(express.static(path.join(__dirname, 'public')));

// الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// رابط فك القفل المباشر
app.get('/unlock', (req, res) => {
    res.send(`
        <html>
            <body style="background: green; color: white; text-align: center; padding: 50px;">
                <h1>✅ DEVICE UNLOCKED</h1>
                <p>All files have been restored successfully</p>
                <a href="/" style="color: white;">← Return to Main</a>
            </body>
        </html>
    `);
});

// بدء السيرفر
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Access via: http://localhost:${PORT}`);
});
