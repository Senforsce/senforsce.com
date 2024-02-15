module github.com/senforsce/website

go 1.21.6

replace github.com/senforsce/nw => ../nw

replace github.com/senforsceweb => ./

replace github.com/a-h/templ => ../templ

// require github.com/senforsce/nw v0.0.0-00010101000000-000000000000 // indirect

// require github.com/senforsce/nw v0.0.0-00010101000000-000000000000 // indirect

require (
	github.com/a-h/templ v0.2.543
	github.com/senforsce/nw v0.0.0-00010101000000-000000000000
)

require (
	github.com/a-h/pathvars v0.0.12 // indirect
	github.com/joho/godotenv v1.5.1 // indirect
	github.com/julienschmidt/httprouter v1.3.0 // indirect
	github.com/rs/cors v1.8.3 // indirect
	go.uber.org/atomic v1.10.0 // indirect
	go.uber.org/multierr v1.9.0 // indirect
	go.uber.org/zap v1.24.0 // indirect
	golang.org/x/mod v0.8.0 // indirect
)
