"""
Automated UI practice tests for Hex ↔ RGB Converter.

Tests structural and visual elements:
- Page title
- Header/subtitle text
- Input boxes and buttons visibility
- Color preview box presence
- Screenshot for documentation
"""

import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
import os

@pytest.fixture
def driver():
    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()
    yield driver
    driver.quit()

#@pytest.mark.skip(reason="Skipping this test for demo")  # remove or comment to enable the test
def test_page_title_and_header(driver):
    """Verify page title"""
    driver.get("http://localhost:3000")
    time.sleep(2)
    
    # Title 
    assert "Hex ↔ RGB Converter" in driver.title

#@pytest.mark.skip(reason="Skipping this test for demo")  # remove or comment to enable the test
def test_page__Header_and_subtitle(driver):
    """Verify themain header and subtitle"""
    driver.get("http://localhost:3000")
    time.sleep(2)
    
    # Header
    header = driver.find_element(By.TAG_NAME, "h1") # Test using TAG_NAME
    assert header.is_displayed()
    assert "Hex ↔ RGB Converter" in header.text

    # Subtitle
    subtitle = driver.find_element(By.CLASS_NAME, "subtitle") #Test Using CLASS_NAME
    assert subtitle.is_displayed()
    assert "Convert between color formats" in subtitle.text

#@pytest.mark.skip(reason="Skipping this test for demo")  # remove or comment to enable the test
def test_input_and_buttons_visibility(driver):
    """Check that inputs and buttons are visible"""
    driver.get("http://localhost:3000")
    time.sleep(2)
    
    # Hex > RGB
    # Locate the Hex input field and the convert button by their HTML IDs
    hex_input = driver.find_element(By.ID, "hexInput") 
    hex_btn = driver.find_element(By.ID, "hexConvertBtn")

    # Verify both elements (input + button) are visible on the page
    assert hex_input.is_displayed()
    assert hex_btn.is_displayed()
    assert hex_input.get_attribute("placeholder") == "#RRGGBB"
    
    # RGB > Hex
     # Locate the three RGB input fields and the convert button
    r_input = driver.find_element(By.ID, "rInput")
    g_input = driver.find_element(By.ID, "gInput")
    b_input = driver.find_element(By.ID, "bInput")
    rgb_btn = driver.find_element(By.ID, "rgbConvertBtn")

    # Verify that all RGB input fields and the convert button are visible
    assert r_input.is_displayed() and g_input.is_displayed() and b_input.is_displayed()
    assert rgb_btn.is_displayed()
    assert r_input.get_attribute("placeholder") == "R"

#@pytest.mark.skip(reason="Skipping this test for demo")  # remove or comment to enable the test
def test_color_preview_box(driver):
    """Check that color preview box exists and is visible"""
    driver.get("http://localhost:3000")
    time.sleep(2)
    
    preview = driver.find_element(By.ID, "colorPreview")
    assert preview.is_displayed()
    assert "Preview Area" in preview.text

#@pytest.mark.skip(reason="Skipping this test for demo")  # remove or comment to enable the test
def test_front_page_screenshot(driver):
    """Take a screenshot for documentation"""
    driver.get("http://localhost:3000")
    time.sleep(2)

    timestamp = int(time.time())
    screenshot_file = f"screenshot_{timestamp}.png"
    driver.save_screenshot(screenshot_file)
    print(f"Screenshot saved: {screenshot_file}")

    time.sleep(2)
