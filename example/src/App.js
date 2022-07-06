import React from "react";
import "void-design/lib/void.css";
import { Button, Form, Input, message } from "void-design";

const App = () => {
  return (
    <div style={{ margin: "50px" }}>
      <Button
        theme="success"
        onClick={() => message.success("Successfully completed")}
      >
        Success Here!
      </Button>
      <Button theme="warning" onClick={() => message.warning("Its a warning")}>
        Warning Here!
      </Button>
      <Button theme="error" onClick={() => message.error("Some error occured")}>
        Error Here!
      </Button>
      <Form onSubmit={(values) => window.alert(JSON.stringify(values))}>
        <Input label="Name" name="name" placeholder="Enter your name" />
        <div style={{ display: "flex", flexWrap: "wrap", width: "90vw" }}>
          {["primary", "secondary", "success", "warning", "error"].map(
            (theme, i) => (
              <div style={{ display: "flex", flexWrap: "wrap", width: "50vw" }}>
                {["large", "medium", "small"].map((size, j) => (
                  <div style={{ display: "flex", minWidth: "690px" }}>
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
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </Form>
    </div>
  );
};

export default App;
