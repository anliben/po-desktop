#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use serde::Serialize;

fn main() {
  tauri::Builder::default()
    .invoke_handler(|_webview, args|{
      Err(e) => Err(e.to_string()),
      Ok(command) => {
        match command {
          LogOperation { event, payload } => {
            println!("event received")
          }
          PerformRequest {
            endpoint,
            body,
            callback,
            error,
          } => {
            tauri::execute_promise(
              _webview, move || {
                println!("ae")
                Ok("{ key: 'response', value: [{id: 3}] })".to_string())
              },
              callback,error,

            )
          }
        },
        Ok(())
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn my_custom_command(invoke_message: String) {
  println!("I was invoked from JS, with this message: {}", invoke_message);
  return 'success'
}
