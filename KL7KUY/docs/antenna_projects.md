---
title: Antenna Projects
description: My homebrew antenna projects and experiments
slug: /antenna-projects
---

# Antenna Projects

Here you'll find documentation for my various homebrew antenna projects, including designs of others and my own, performance notes, and lessons learned.

## Current Projects

### WE7OMG Pockrus Open Stub J-Pole (Joystick™)
- **Designer**: WE7OMG (Carl Pokrus) / NT1K (Jeffrey Bail)
- **Type**: Dual-band 2m/70cm Open-Stub, Half-Wave J-Pole

#### Technical Overview
Technically, the Pockrus™ J-pole Joystick™ antenna is a dual-band (2 meters and 70 cm) open-stub, half-wave J-pole antenna. As a vertical radiator, it has a flattened-donut omnidirectional pattern, sending a radio signal fairly equally in all directions parallel to the earth.

#### Construction
- **Materials**:
  - Solid aluminum rod stock (3/8" diameter)
  - Aluminum angle brackets for mounting
  - Stainless steel nuts with Loctite™ to prevent accidental loosening
  - Threaded rods for secure assembly
- **Connector**: SO-239 (UHF) stud for connection to 50-ohm coaxial cable
- **Design Features**:
  - Open Stub design for improved bandwidth and performance
  - Pre-drilled mounting holes for easy installation
  - Weather-resistant construction with proper sealing to the SO-239 connector

#### Performance
- **2m Band (144-148 MHz)**:
  - SWR: 1.1:1 or better
  - Gain: 2.6 dBi (measured over real earth)
  - Radiation: Flattened-donut omnidirectional pattern
- **70cm Band (440-450 MHz)**:
  - SWR: 1.3:1 or better
  - Gain: 5.2 dBi (measured over real earth)
  - Radiation: Flattened-donut omnidirectional pattern
- **Power Handling**: 1500W PEP
- **Bandwidth**: Covers entire 2m and 70cm bands, compatible with GMRS frequencies

**Note on Gain Measurements**: The gain values listed are measured over real earth conditions. When comparing antenna gains, it's important to understand that a dipole over earth at optimum height has approximately 8.5 dBi gain (not the often-cited 2.15 dB over isotropic). The J-pole's gain of ~2.6 dBi on 2m is comparable to a 1/4 wave ground plane antenna (2.69 dBi). For more technical details on J-pole gain and performance, see [W8JI's End-Fed Vertical and J-pole Analysis](https://www.w8ji.com/end-fed_vertical.htm) or [PDF](/pdf/End-fed-Vertical-and-J-pole.pdf).

#### Features
- No radials or ground plane needed
- Omnidirectional radiation pattern (flattened-donut)
- Improved bandwidth over traditional copper J-Pole designs
- Simple construction with common materials sourced from local hardware stores and online
- Secure assembly with stainless steel hardware and thread locker
- **Usage**: 
  - Local repeater access
  - APRS operation/ Winlink
  - Simplex communications
  - Emergency communications
- **References**:
  - [WE7OMG's Original Design](https://noji.com/hamradio/jpole.php)
  - [Open Stub J-Pole Project Details](https://nt1k.com/open-stub-j-pole-project-completed-many-times/)
  - [NT1K.com](https://nt1k.com/open-stub-j-pole-project-completed-many-times/)
  - [How to install Pokrus J-Pole](https://noji.com/hamradio/pdf-ppt/noji/Noji-Article-Pockrus-J-Pole.pdf) or [PDF](/pdf/Noji-Article-Pockrus-J-Pole.pdf)
- **Images**: 
   ![WE7OMG Pockrus Open Stub J-Pole - Front View](/img/antenna_projects/DualBandJPole1-1-scaled.webp)
   ![WE7OMG Pockrus Open Stub J-Pole - Side View](/img/antenna_projects/DualBandJPole2-1-scaled.webp)
   *Images courtesy of [NT1K.com](https://nt1k.com/open-stub-j-pole-project-completed-many-times/)*

#### Installation
- Install the J-Pole on a 1/2 wave vertical (12.5 ft or 3.8 m)
- Use a 50 ohm coaxial cable to connect the J-Pole to the radio
- Wrap the coaxial cable in 5 turns of LMR-400 to create a ugly but effective RF choke, this helps keep RF from returning to the radio. This antenna suffers from common mode current, so the RF choke is important.



### End-Fed Half Wave (EFHW) Antenna
- 40m-10m multiband configuration
- Homebrew 49:1 unun
- Lightweight and portable for field operations

### Magnetic Loop Antenna
- 20m-10m coverage
- Vacuum variable capacitor tuning
- Remote tuning system in development

### Yagi Antennas
- 2m/70cm dual-band Yagi for satellite work
- Portable 6m Yagi for VHF contests

## Future Projects
- NVIS antenna system for regional communications
- Hexbeam for HF DXing
- Portable vertical antenna for SOTA activations

## Resources
- [ARRL Antenna Book](https://www.arrl.org/shop/ARRL-Antenna-Book/)
- [K7MEM Antenna Resources](https://www.k7mem.com/)
- [M0UKD Antenna Calculators](https://m0ukd.com/calculators/)

---
*Last Updated: October 2025*
