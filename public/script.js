document.addEventListener("DOMContentLoaded", () => {
  const poTypeSelect = document.getElementById("poType");
  const addReqBtn = document.getElementById("addReqBtn");
  const talentReqs = document.getElementById("talentReqs");
  const form = document.getElementById("poForm");

  // list of fake talents tied to job titles
  const talentMap = {
    "Application Development": [
      "Monika Goyal Test",
      "Shaili Khatri",
    ],
    "Business Administrator": [
      "Talent A",
      "Talent B",
    ],
  };

  // makes a little checkbox item with label for a talent
  function createTalentCheckbox(name, reqIndex) {
    const div = document.createElement("div");
    div.classList.add("form-check", "mt-2");
    div.innerHTML = `
      <input class="form-check-input talentCheck" type="checkbox" name="talents[${reqIndex}][]" value="${name}">
      <label class="form-check-label">${name}</label>
    `;
    return div;
  }

  // when user changes job selection -> update req id + load talents
  function onJobChange(e) {
    const section = e.target.closest(".req-section");
    const reqIdInput = section.querySelector(".reqId");
    const talentsDiv = section.querySelector(".talents");
    const jobValue = e.target.value;

    if (jobValue === "Application Development") {
      reqIdInput.value = "OWNAI_234";
    } else if (jobValue === "Business Administrator") {
      reqIdInput.value = "CLK_12880";
    } else {
      reqIdInput.value = "";
    }

    // clear out the old options
    talentsDiv.innerHTML = ""; 

    // slap in the new checkboxes if we got matches
    (talentMap[jobValue] || []).forEach((t) => {
      talentsDiv.appendChild(createTalentCheckbox(t, Date.now()));
    });
  }

  // show or hide add another button based on po type
  poTypeSelect.addEventListener("change", () => {
    if (poTypeSelect.value === "Group PO") {
      addReqBtn.style.display = "inline-block";
    } else {
      addReqBtn.style.display = "none";
    }
  });

  // add another req chunk if user wants more
  addReqBtn.addEventListener("click", () => {
    const clone = talentReqs.firstElementChild.cloneNode(true);
    clone.querySelector(".jobTitle").value = "";
    clone.querySelector(".reqId").value = "";
    clone.querySelector(".talents").innerHTML = "";
    talentReqs.appendChild(clone);
  });

  // listen for any change on job title dropdowns
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("jobTitle")) {
      onJobChange(e);
    }
  });

  // sanity checks before form actually submits
  form.addEventListener("submit", (e) => {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    if (endDate < startDate) {
      alert("End Date cannot be before Start Date!");
      e.preventDefault();
    }

    // budget should not be crazy long
    const budget = form.querySelector("input[name=budget]").value;
    if (String(budget).length > 5) {
      alert("Budget max 5 digits!");
      e.preventDefault();
    }

    const poType = poTypeSelect.value;
    const checkedTalents = form.querySelectorAll(".talentCheck:checked").length;

    // basic rule check for talent count vs po type
    if (poType === "Individual PO" && checkedTalents > 1) {
      alert("Only one talent allowed for Individual PO!");
      e.preventDefault();
    }
    if (poType === "Group PO" && checkedTalents < 2) {
      alert("At least two talents required for Group PO!");
      e.preventDefault();
    }
  });
});