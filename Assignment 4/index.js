document
  .getElementById("expand-all")
  .addEventListener("click", () => toggleAllDefinitions(true));
document
  .getElementById("collapse-all")
  .addEventListener("click", () => toggleAllDefinitions(false));

const todolistContainer = document.querySelector("#container");
todolistContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const buttonId = e.target.id;
    if (buttonId.startsWith("btn-")) {
      const defId = buttonId.replace("btn-", "");
      toggleDefinition(defId);
    }
  }
});

function toggleDefinition(defId) {
  const definitions = document.querySelectorAll(".definition");
  definitions.forEach((def) => {
    if (def.id === defId) {
      def.style.display = def.style.display === "none" ? "block" : "none";
    } else {
      def.style.display = "none";
    }
  });
}

function toggleAllDefinitions(expand) {
  const definitions = document.querySelectorAll(".definition");
  definitions.forEach((def) => {
    def.style.display = expand ? "block" : "none";
  });
}
