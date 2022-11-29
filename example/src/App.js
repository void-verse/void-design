import React from "react";
import "void-design/lib/void.css";
import { Button, Form, Input, Drawer, Snackbar } from "void-design";
import { useState } from "react";

const App = () => {
  const [sliderOpen, setSliderOpen] = useState(false);

  return (
    <header style={{ margin: "50px" }}>
      <Button theme="primary" onClick={() => setSliderOpen(true)}>
        Drawer {sliderOpen ? "Open" : "Closed"}
      </Button>
      <Drawer
        header={"Drawer Header"}
        footer={"Drawer Footer"}
        isOpen={sliderOpen}
        onClose={() => setSliderOpen(false)}
      >
        He he
      </Drawer>
      <Button
        theme="success"
        onClick={() => Snackbar.success("Successfully completed")}
      >
        Success Here!
      </Button>
      <Button theme="warning" onClick={() => Snackbar.warning("Its a warning")}>
        Warning Here!
      </Button>
      <Button
        theme="error"
        onClick={() => Snackbar.error("Some error occured")}
      >
        Error Here!
      </Button>
      <Form onSubmit={(values) => window.alert(JSON.stringify(values))}>
        <Input label="Name" name="name" placeholder="Enter your name" />
        <Input.Password
          label="Name"
          name="password"
          placeholder="Enter your name"
        />
        <Input.Select
          label="Name"
          name="name"
          placeholder="Enter your name"
          options={[
            { label: "Animal", value: "1" },
            { label: "Bracket", value: "2" },
            { label: "Chemistry", value: "3" },
            { label: "Danger", value: "4" },
            { label: "Elephant", value: "5" },
            { label: "Flute", value: "6" },
            { label: "Ganguly", value: "7" },
            { label: "Hipster", value: "8" },
            { label: "Ijjathi", value: "9" },
            { label: "Kinston", value: "10" },
          ]}
        />
        <header style={{ display: "flex", flexWrap: "wrap", width: "90vw" }}>
          {["primary", "secondary", "success", "warning", "error"].map(
            (theme, i) => (
              <header
                style={{ display: "flex", flexWrap: "wrap", width: "50vw" }}
              >
                {["large", "medium", "small"].map((size, j) => (
                  <header style={{ display: "flex", minWidth: "690px" }}>
                    {["solid", "liquid", "gas"].map((structure) => (
                      <Button
                        theme={theme}
                        loading={j % 2 === 0 && i % 2 === 0}
                        disabled={j % 3 === 0 && i % 3 === 0}
                        size={size}
                        structure={structure}
                      >
                        {theme} {size} {structure}
                      </Button>
                    ))}
                  </header>
                ))}
              </header>
            )
          )}
        </header>
      </Form>
    </header>
  );
};

export default App;
