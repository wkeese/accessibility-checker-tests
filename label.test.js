/**
 * @jest-environment jsdom
 */

const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = (node) => originalGetComputedStyle(node);

describe("Hello World - Baseline Basics", () => {
    test("Image missing alt without Baseline", async () => {
        document.body.innerHTML = `
<input
        id="myCheckbox"
        type="checkbox"
        name="myc"
      />
      <label
        class="cds--checkbox-label"
        for="myCheckbox"
      >
        My checkbox
      </label>
        `
        await expect(document).toBeAccessible("IMG_NO_BASELINE")
    })
})
