// moock fpi [f.lash p.layer i.nspector]
// version: 1.3.5
// written by colin moock
// code maintained at: http://www.moock.org/webdesign/flash/detection/moockfpi/
// terms of use posted at: http://www.moock.org/terms/



// #############################################
// These are the user defined globals.
// Modify the following variables to customize the inspection behaviour.

var requiredVersion = 5;   // Version the user needs to view site (max 6, min 2)
var useRedirect = true;    // Flag indicating whether or not to load a separate
                           // page based on detection results. Set to true to
                           // load a separate page. Set to false to embed the
                           // movie or alternate html directly into this page.
                           
// Only set next three vars if useRedirect is true...
var flashPage = "main.asp"      // The location of the flash movie page
var noFlashPage = "noflash.htm"  // Page displayed if the user doesn't have the
                                  // plugin or we can't detect it.
var upgradePage = "upgrade.htm"  // Page displayed if we detect an old plugin
// #############################################



// *************
// Everything below this point is internal until after the BODY tag.
// Do not modify! Proceed to the BODY tag for further instructions.
// *************

// System globals
var flash2Installed = false;    // boolean. true if flash 2 is installed
var flash3Installed = false;    // boolean. true if flash 3 is installed
var flash4Installed = false;    // boolean. true if flash 4 is installed
var flash5Installed = false;    // boolean. true if flash 5 is installed
var flash6Installed = false;    // boolean. true if flash 6 is installed
var maxVersion = 6;             // highest version we can actually detect
var actualVersion = 0;          // version the user really has
var hasRightVersion = false;    // boolean. true if it's safe to embed the flash movie in the page
var jsVersion = 1.0;            // the version of javascript supported