extends Control

const ROWS := 10
const COLS := 8

@onready var board = $Board
var cell_scene = preload("res://scenes/cell.tscn")

func _ready() -> void:
	create_board()

func create_board() -> void:
	board.columns = COLS

	for i in ROWS * COLS:
		var cell = cell_scene.instantiate()
		cell.pressed.connect(_on_cell_pressed.bind(cell))
		board.add_child(cell)

func _on_cell_pressed(cell) -> void:
	cell.text = "✓"
	cell.disabled = true
