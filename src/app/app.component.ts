import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as Cosmos from "@azure/cosmos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExBatch-Heumann';

  async click() {
    let endpoint = "https://schruefer.documents.azure.com:443/";
    let key = "ZE8r1ZNlJuL7o1F10F5NuPlJgJiC2TElldQycH2QCxIaZzkGcnxA5Za3URdElQM8ef66ctGmLNz1ACDbc9JuIA";
    let client = new Cosmos.CosmosClient({endpoint: endpoint, key: key});
    let database = "Heumann";
    let db = client.database(database);
    let container = db.container("Categories");
    try {
      await container.items
      .query({
          query: "SELECT * from c"
      })
      .fetchAll()
      .then((response: any) => {
        console.log(response.resources);
      }) 
    } catch(error) {
      console.log(error);
    }    
  }
}
