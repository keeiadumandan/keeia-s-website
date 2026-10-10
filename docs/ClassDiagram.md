# Class Diagram: Keeia's Website

```mermaid
classDiagram
    class main {
        +render(App)
    }

    class App {
        +render()
    }

    class Navbar {
        -links : NavLink[]
        +render()
    }

    class About {
        -interests : Interest[]
        +render()
    }

    class Projects {
        -projects : Project[]
        +render()
    }

    class Contact {
        +render()
    }

    class NavLink {
        +label : String
        +href : String
    }

    class Interest {
        +name : String
    }

    class Project {
        +name : String
        +tag : String
        +color : String
        +note : String
    }

    main --> App : renders
    App --> Navbar : uses
    App --> About : uses
    App --> Projects : uses
    App --> Contact : uses
    Navbar --> NavLink : uses
    About --> Interest : uses
    Projects --> Project : uses
```

## How to read it

- `main` is main.jsx. It starts the app by rendering `App`.
- `App` is the parent. It shows the welcome card and the 4 components.
- `Navbar`, `About`, `Projects`, and `Contact` are the components you see on the page.
- `NavLink`, `Interest`, and `Project` are the 3 class models. They hold the data.
- The `[]` after a type means a list.
- The `+` means public and the `-` means private.
