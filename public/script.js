// كود الفدية - للتجريب والتعليم فقط
class FakeRansomware {
    constructor() {
        this.victimId = this.generateId();
        this.startTime = new Date();
        this.isLocked = false;
        this.secretCode = "123";           // كود فك القفل الجديد
        this.emergencyCode = "123456";     // كود الطوارئ الجديد
        
        this.init();
    }

    generateId() {
        return 'VICTIM_' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    init() {
        console.log('🚀 Android Security Simulator Started');
        console.log('🔓 Unlock Code: 123');
        console.log('🆘 Emergency Code: 123456');
        
        this.startFakeScan();
        this.preventUserActions();
        this.setupServiceWorker();
    }

    startFakeScan() {
        const messages = [
            "> Scanning system files...",
            "> Checking for malware...", 
            "> Analyzing user data...",
            "> Connecting to Render.com server...",
            "> WARNING: Suspicious activity detected!",
            "> Encrypting user files for protection...",
            "> CRITICAL: Ransomware infection confirmed!",
            "> Device lockdown initiated..."
        ];

        let index = 0;
        const output = document.getElementById('output');

        const typeInterval = setInterval(() => {
            if (index < messages.length) {
                output.innerHTML += `<div>${messages[index]}</div>`;
                output.scrollTop = output.scrollHeight;
                index++;
            } else {
                clearInterval(typeInterval);
                this.showRansomScreen();
            }
        }, 2000);
    }

    showRansomScreen() {
        document.getElementById('terminal').classList.add('hidden');
        document.getElementById('ransomScreen').classList.remove('hidden');
        this.isLocked = true;
        
        this.startCountdown();
        this.startBackgroundEffects();
        this.showNotifications();
    }

    startCountdown() {
        let timeLeft = 24 * 60 * 60; // 24 ساعة
        const countdownElement = document.getElementById('countdown');

        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                this.showDataDeleted();
                return;
            }

            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            countdownElement.textContent = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            timeLeft--;
        }, 1000);
    }

    startBackgroundEffects() {
        // تأثيرات خلفية مخيفة
        setInterval(() => {
            if (this.isLocked) {
                const colors = ['#1a1a1a', '#2a1a1a', '#1a2a1a', '#1a1a2a'];
                document.body.style.background = `linear-gradient(135deg, ${colors[Math.floor(Math.random() * colors.length)]}, #000)`;
            }
        }, 10000);
    }

    preventUserActions() {
        // منع الخروج
        window.addEventListener('beforeunload', (e) => {
            if (this.isLocked) {
                e.preventDefault();
                e.returnValue = 'Your device is locked! Leaving may cause permanent data loss.';
            }
        });

        // منع右键菜单
        document.addEventListener('contextmenu', (e) => {
            if (this.isLocked) e.preventDefault();
        });
    }

    async setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                await navigatorServiceWorker.register('/sw.js');
                console.log('✅ Service Worker registered');
            } catch (error) {
                console.log('❌ SW registration failed:', error);
            }
        }
    }

    showNotifications() {
        if ('Notification' in window && Notification.permission === 'granted') {
            setInterval(() => {
                if (this.isLocked) {
                    new Notification('🔒 Android Device Locked', {
                        body: 'This is a simulation - Use code: 123 to unlock',
                        icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI2ZmMDAwMCIvPjx0ZXh0IHg9IjMyIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5KlPC90ZXh0Pjwvc3ZnPg==',
                        tag: 'security-simulation'
                    });
                }
            }, 120000); // كل دقيقتين
        }
    }

    checkPayment() {
        const code = prompt('Enter unlock code (Hint: 123):');
        if (code === this.secretCode) {
            this.unlockDevice();
        } else {
            alert('❌ Invalid code! Try: 123');
        }
    }

    emergencyUnlock() {
        const code = prompt('Enter emergency unlock code (Hint: 123456):');
        if (code === this.emergencyCode) {
            this.unlockDevice();
        } else {
            alert('❌ Invalid emergency code! Try: 123456');
        }
    }

    unlockDevice() {
        this.isLocked = false;
        
        document.body.innerHTML = `
            <div style="background: linear-gradient(135deg, #00ff00, #00cc00); color: #000; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 30px; font-family: Arial, sans-serif;">
                <h1 style="font-size: 3em; margin-bottom: 20px;">✅ DEVICE UNLOCKED</h1>
                <p style="font-size: 1.5em; margin-bottom: 30px;">All your files have been successfully restored</p>
                <p style="font-size: 1.2em; margin-bottom: 20px;">🔓 Security Simulation Completed Successfully</p>
                <div style="background: rgba(255,255,255,0.3); padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <p>🎯 This was an educational simulation</p>
                    <p>📱 No actual files were harmed</p>
                    <p>🔒 Learn about cybersecurity threats</p>
                </div>
                <button onclick="location.reload()" style="margin-top: 30px; padding: 15px 30px; background: #000; color: #00ff00; border: none; border-radius: 5px; font-size: 1.1em; cursor: pointer;">
                    🔄 RESTART SIMULATION
                </button>
                <p style="margin-top: 20px; color: #666;">Powered by Render.com</p>
            </div>
        `;
    }

    showDataDeleted() {
        document.body.innerHTML = `
            <div style="background: #000; color: #ff0000; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 30px;">
                <h1 style="font-size: 2.5em; margin-bottom: 20px;">💀 DATA DELETED - SIMULATION</h1>
                <p style="font-size: 1.2em;">This is a simulation - No actual data was deleted</p>
                <p style="margin-top: 20px; color: #ccc;">Time expired - Recovery no longer possible in this simulation</p>
                <button onclick="location.reload()" style="margin-top: 30px; padding: 15px 30px; background: #333; color: #fff; border: none; border-radius: 5px;">
                    RESTART SIMULATION
                </button>
            </div>
        `;
    }
}

// كود سري للمطور (Ctrl+Shift+U)
document.addEventListener('keydown', (e) => {
    if (e.key === 'u' && e.ctrlKey && e.shiftKey) {
        window.fakeRansomware.unlockDevice();
    }
});

// طلب الإشعارات
if ('Notification' in window) {
    Notification.requestPermission();
}

// بدء المحاكاة
const fakeRansomware = new FakeRansomware();
window.fakeRansomware = fakeRansomware;
