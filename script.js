(async () => {
  async function selectOptions() {
    const dropdowns = document.querySelectorAll(".dropdown");

    for (const dropdown of dropdowns) {
      // Open the dropdown
      const toggleButton = dropdown.querySelector('[data-toggle="dropdown"]');
      if (toggleButton) {
        toggleButton.click();
      }

      // Wait for the dropdown menu to open
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Select an option with data-score 8
      const targetScore = 9;
      const option = dropdown.querySelector(
        `.dropdown-item[data-score="${targetScore}"]`
      );
      if (option) {
        option.click();
      }

      // Close the dropdown by clicking the toggle button again
      if (toggleButton) {
        toggleButton.click();
      }

      // Wait for 1.5 seconds (1500ms) before moving to the next dropdown
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }
  }

  async function selectUpOptions() {
    const dropdowns = document.querySelectorAll(".dropup");

    for (const dropdown of dropdowns) {
      // Open the dropdown
      const toggleButton = dropdown.querySelector('[data-toggle="dropdown"]');
      if (toggleButton) {
        toggleButton.click();
      }

      // Wait for the dropdown menu to open
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Select an option with data-score 8
      const targetScore = 9;
      const option = dropdown.querySelector(
        `.dropdown-item[data-score="${targetScore}"]`
      );
      if (option) {
        option.click();
      }

      // Close the dropdown by clicking the toggle button again
      if (toggleButton) {
        toggleButton.click();
      }

      // Wait for 1.5 seconds (1500ms) before moving to the next dropdown
      await new Promise((resolve) => setTimeout(resolve, 700));
    }
  }
  await selectOptions();
  await selectUpOptions();
})();
