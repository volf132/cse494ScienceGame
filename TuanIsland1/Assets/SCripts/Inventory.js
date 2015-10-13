#pragma strict
static var charge : int = 0;
var collectSound : AudioClip;
//HUD
var hudCharge : Sprite[];
var chargeHudGUI : UI.Image;
// Generator
var meterCharge : Texture2D[];
var meter : Renderer;
function Start () {
	charge = 0;
}
function CellPickup() {
	AudioSource.PlayClipAtPoint(collectSound, transform.position);
	charge++;
	chargeHudGUI.sprite  = hudCharge[charge];
	meter.material.mainTexture = meterCharge[charge];
}
