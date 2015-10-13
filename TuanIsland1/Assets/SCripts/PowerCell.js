﻿#pragma strict
var rotationSpeed : float = 100.0;

function Update () {
	transform.Rotate(new Vector3(0,rotationSpeed * Time.deltaTime, 0));
}

function OnTriggerEnter(col : Collider) {
	if(col.gameObject.tag == "Player") {
		col.gameObject.SendMessage("CellPickup");
		Destroy(gameObject);
	}
}