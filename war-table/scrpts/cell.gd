extends Button
class_name Cell
var row
var col

func set_color(color: Color):
	$Ground.modulate = color
