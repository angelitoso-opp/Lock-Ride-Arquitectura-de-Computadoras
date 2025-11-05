// Interacción del panel IoT
const panelBtn = document.getElementById("btnPanel");
if (panelBtn) {
    panelBtn.addEventListener("click", () => {
        alert("🔧 Simulación: Abriendo panel IoT del sistema Lock&Ride...");
    });
}

// Slots interactivos en la simulación (index)
const slots = document.querySelectorAll(".slot");
slots.forEach(slot => {
    slot.addEventListener("click", () => {
        if (slot.textContent.includes("Libre")) {
            slot.textContent = "🔴 Slot ocupado";
            slot.style.background = "#FF6347";
        } else if (slot.textContent.includes("ocupado")) {
            slot.textContent = "🟢 Slot libre";
            slot.style.background = "#004aad";
        } else {
            slot.textContent = "🟡 Slot en alerta";
            slot.style.background = "#FFD700";
        }
    });
});

// Simulación del formulario de contacto
const form = document.getElementById("formContacto");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("📨 Gracias por contactarnos, tu mensaje fue simulado correctamente.");
        form.reset();
    });
}

// Acciones del panel IoT
const reiniciar = document.getElementById("reiniciar");
if (reiniciar) {
    reiniciar.addEventListener("click", () => {
        alert("♻️ Sensores reiniciados correctamente (simulado).");
    });
}
// --- INTERACCIÓN FAQ ---
const preguntas = document.querySelectorAll(".faq-question");
preguntas.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("open");
        btn.classList.toggle("active");
    });
});
