package main

import (
	"log"

	//added temporarily

	"github.com/a-h/templ"
	"github.com/a-h/templ/storybook"

	"github.com/senforsce/website/Concepts/Example/handler"
	"github.com/senforsce/website/Concepts/Example/layout"

	"github.com/senforsce/nw/router"
)

func start() {
	app := router.New()
	app.Get("/", handler.HandleHelloIndex)
	app.Get("/storybook_preview", storybookExample)
	app.Get("/storybook_preview/example-helloworld--default", storybookExample)

	log.Fatal(app.Start())

}

func storybookExample(c *router.Context) error {
	// Read the name from the querystring.
	// name := r.URL.Query().Get("name")
	// Render the component.
	templ.Handler(layout.Base()).ServeHTTP(c.Response, c.Request)

	s := storybook.New()

	s.AddComponent("helloworld", layout.Base(),
		storybook.TextArg("name", "hello World page"))

	return nil
}

func main() {
	start()
}
