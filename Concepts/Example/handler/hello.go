package handler

import (
	helloWorld "github.com/senforsce/website/Concepts/Example/view"

	"github.com/senforsce/nw/router"
)

func HandleHelloIndex(c *router.Context) error {
	return c.Render(helloWorld.Index())
}
