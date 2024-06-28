## Create a quickstart workspace ##

The QUICKSTART button on the home screen opens an Ethereum or Filecoin quickstart workspace, depending on which technology is selected. This workspace is meant to provide a clean slate for prototype development.

Create a workspace¶
The Quickstart workspace is great for getting a development blockchain up and running instantly, but for projects already in progress, or users who need custom configurations, we provide two ways to create a full workspace.

See Saving the Current Quickstart Blockchain as a New Workspace if you've already created a quickstart workspace and are ready to add projects or make customizations.
If you're starting fresh check out Creating a Workspace from Scratch.
Save the current quickstart blockchain as a new workspace¶
As mentioned above, a quickstart workspace resets the blockchain on every restart. Perhaps you've found yourself prototyping in a quickstart workspace to try out a couple of things, but then we want to save the blockchain as a new workspace for later recall.

To accomplish this, click the SAVE button near the upper right of the screen when in a quickstart workspace.

Saving a Workspace

Create a workspace from scratch¶
You can also create a workspace from the home screen. Selecting either Ethereum or Filecoin from the NEW WORKSPACE dropdown then clicking the NEW WORKSPACE button on the home screen will take us to the options screen to configure your workspace.

New Workspace Button

Configure a workspace¶
A workspace name will be randomly generated for you, but you can go ahead and change it. You can also change any of the other configuration options. When you're ready to start the new workspace, click SAVE WORKSPACE in the top right corner.


## Delete a workspace¶ ##
To delete a workspace, from the home screen, hover over the workspace name and click the trash can icon on the right hand side. From there you'll see a prompt asking you to confirm the deletion. Click REMOVE to delete the workspace. This action is irreversible! While your linked projects will remain safe and unchanged, the blockchain data (i.e. blocks, transactions, events, etc.) will be deleted.

## Edit a workspace¶ ##
To edit a workspace without loading it first, from the home screen, hover over the workspace name and click the settings icon on the right hand side. You'll then be able to reconfigure your existing workspace.

## Switch workspaces¶ ##
To switch workspaces, click the SWITCH button near the upper right of the screen. You'll be taken to the home screen where you can select a different existing workspace or create a new one.


## Link a Truffle project¶ ##

To link a project, enter the settings by clicking the gear icon in the upper right.
You should be seeing the WORKSPACE settings pane; if not, you can get there by clicking the WORKSPACE tab in the top left.
From here, there is a section labeled TRUFFLE PROJECTS. Beneath this box, click the button ADD PROJECT. A file selection popup will appear. Navigate to the folder of your Truffle project, and select the truffle-config.js or truffle.js configuration file. The file you pick must be either named truffle-config.js or truffle.js for Ganache to correctly load it.

After selecting the file, you'll see it listed in the TRUFFLE PROJECTS section.
You can add multiple projects to a workspace. After you're finished adding projects you can click the SAVE AND RESTART (SAVE WORKSPACE if this is a new workspace) button in the top right.


## Unlink a Truffle project¶ ##
If you no longer want a Truffle project linked to a workspace, go to the WORKSPACE settings pane the same way you did when linking the project.

To remove/unlink a Truffle project from the workspace, click on the project file in the TRUFFLE PROJECTS list and then click the REMOVE PROJECT button.

Project Selected

When you're done, click the SAVE AND RESTART (SAVE WORKSPACE if this is a new workspace) button in the top right.