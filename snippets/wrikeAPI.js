var methodsJson = {
  "entities": [
    {
      "name": "Contacts",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Contacts",
          "methods": [
            {
              "id": "GET:/contacts/empty",
              "httpMethod": "GET",
              "path": "/contacts",
              "comment": "List contacts of all users and user groups in current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model0",
              "responseModelRef": "model1"
            },
            {
              "id": "GET:/contacts/multi",
              "httpMethod": "GET",
              "path": "/contacts/{contactId},{contactId},... - up to 100 IDs",
              "comment": "List contacts of specified users and user groups.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model2",
              "responseModelRef": "model1"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Contact",
          "methods": [
            {
              "id": "PUT:/contacts/single",
              "httpMethod": "PUT",
              "path": "/contacts/{contactId}",
              "comment": "Update contact of requesting user by ID (use \u0027Modify User\u0027 method to update other users). Account Admins may use this method to update group info by group ID. .",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model3",
              "responseModelRef": "model1"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Users",
      "details": null,
      "methodGroups": [
        {
          "name": "Query User",
          "methods": [
            {
              "id": "GET:/users/single",
              "httpMethod": "GET",
              "path": "/users/{userId}",
              "comment": "Returns information about single user.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model1"
            }
          ],
          "scopes": [
            "amReadOnlyUser",
            "amReadWriteUser"
          ]
        },
        {
          "name": "Modify User",
          "methods": [
            {
              "id": "PUT:/users/single",
              "httpMethod": "PUT",
              "path": "/users/{userId}",
              "comment": "Update users by ID (accessible to Admins only).",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model4",
              "responseModelRef": "model1"
            }
          ],
          "scopes": [
            "amReadWriteUser"
          ]
        }
      ]
    },
    {
      "name": "Groups",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Groups",
          "methods": [
            {
              "id": "GET:/groups/single",
              "httpMethod": "GET",
              "path": "/groups/{groupId}",
              "comment": "Returns complete information about single group.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model5",
              "responseModelRef": "model6"
            },
            {
              "id": "GET:/groups/empty",
              "httpMethod": "GET",
              "path": "/groups",
              "comment": "Returns all groups in the account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model7",
              "responseModelRef": "model6"
            }
          ],
          "scopes": [
            "amReadOnlyGroup",
            "amReadWriteGroup"
          ]
        },
        {
          "name": "Create Groups",
          "methods": [
            {
              "id": "POST:/groups/empty",
              "httpMethod": "POST",
              "path": "/groups",
              "comment": "Create group in account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model8",
              "responseModelRef": "model6"
            }
          ],
          "scopes": [
            "amReadWriteGroup"
          ]
        },
        {
          "name": "Modify Groups",
          "methods": [
            {
              "id": "PUT:/groups/single",
              "httpMethod": "PUT",
              "path": "/groups/{groupId}",
              "comment": "Update group by id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model9",
              "responseModelRef": "model6"
            }
          ],
          "scopes": [
            "amReadWriteGroup"
          ]
        },
        {
          "name": "Delete Groups",
          "methods": [
            {
              "id": "DELETE:/groups/single",
              "httpMethod": "DELETE",
              "path": "/groups/{groupId}",
              "comment": "Delete group by Id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model10",
              "responseModelRef": "model6"
            }
          ],
          "scopes": [
            "amReadWriteGroup"
          ]
        }
      ]
    },
    {
      "name": "Invitations",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Invitations",
          "methods": [
            {
              "id": "GET:/invitations/empty",
              "httpMethod": "GET",
              "path": "/invitations",
              "comment": "Get all invitations for current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model11"
            }
          ],
          "scopes": [
            "amReadOnlyInvitation",
            "amReadWriteInvitation"
          ]
        },
        {
          "name": "Create Invitation",
          "methods": [
            {
              "id": "POST:/invitations/empty",
              "httpMethod": "POST",
              "path": "/invitations",
              "comment": "Create an invitation into the current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model12",
              "responseModelRef": "model11"
            }
          ],
          "scopes": [
            "amReadWriteInvitation"
          ]
        },
        {
          "name": "Update Invitation",
          "methods": [
            {
              "id": "PUT:/invitations/single",
              "httpMethod": "PUT",
              "path": "/invitations/{invitationId}",
              "comment": "Update invitation by ID and/or resend invitation.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model13",
              "responseModelRef": "model11"
            }
          ],
          "scopes": [
            "amReadWriteInvitation"
          ]
        },
        {
          "name": "Delete Invitation",
          "methods": [
            {
              "id": "DELETE:/invitations/single",
              "httpMethod": "DELETE",
              "path": "/invitations/{invitationId}",
              "comment": "Delete invitation by ID.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model11"
            }
          ],
          "scopes": [
            "amReadWriteInvitation"
          ]
        }
      ]
    },
    {
      "name": "Account",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Accounts",
          "methods": [
            {
              "id": "GET:/account/empty",
              "httpMethod": "GET",
              "path": "/account",
              "comment": "Returns current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model14",
              "responseModelRef": "model15"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Account",
          "methods": [
            {
              "id": "PUT:/account/empty",
              "httpMethod": "PUT",
              "path": "/account",
              "comment": "Update current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model3",
              "responseModelRef": "model15"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Workflows",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Workflows",
          "methods": [
            {
              "id": "GET:/workflows/empty",
              "httpMethod": "GET",
              "path": "/workflows",
              "comment": "Returns list of workflows with custom statuses.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model16"
            }
          ],
          "scopes": [
            "Default",
            "amReadOnlyWorkflow",
            "amReadWriteWorkflow",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Workflow",
          "methods": [
            {
              "id": "POST:/workflows/empty",
              "httpMethod": "POST",
              "path": "/workflows",
              "comment": "Create workflow in account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model17",
              "responseModelRef": "model16"
            }
          ],
          "scopes": [
            "amReadWriteWorkflow"
          ]
        },
        {
          "name": "Modify Workflow",
          "methods": [
            {
              "id": "PUT:/workflows/single",
              "httpMethod": "PUT",
              "path": "/workflows/{workflowId}",
              "comment": "Update workflow or custom statuses.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model18",
              "responseModelRef": "model16"
            }
          ],
          "scopes": [
            "amReadWriteWorkflow"
          ]
        }
      ]
    },
    {
      "name": "Custom Fields",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Custom Fields",
          "methods": [
            {
              "id": "GET:/customfields/empty",
              "httpMethod": "GET",
              "path": "/customfields",
              "comment": "Returns a list of custom fields in current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model19"
            },
            {
              "id": "GET:/customfields/multi",
              "httpMethod": "GET",
              "path": "/customfields/{customfieldId},{customfieldId},... - up to 100 IDs",
              "comment": "Returns complete information about specified custom fields.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model19"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Custom Field",
          "methods": [
            {
              "id": "POST:/customfields/empty",
              "httpMethod": "POST",
              "path": "/customfields",
              "comment": "Create custom field in specified account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model20",
              "responseModelRef": "model19"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Custom Field",
          "methods": [
            {
              "id": "PUT:/customfields/single",
              "httpMethod": "PUT",
              "path": "/customfields/{customfieldId}",
              "comment": "Modify custom field.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model21",
              "responseModelRef": "model19"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Folders \u0026 Projects",
      "details": "Folders \u0026 projects are one of the main ways to organize, manage, and report on work within Wrike. They both show up in the folder tree in the left-hand Navigation panel of the Wrike Workspace. From the perspective of our data model, projects are essentially folders with additional properties (owners, start \u0026 end dates, and status). For instance, the Modify Tasks method allows you to include a task in a specified folder by passing the folder ID in the corresponding parameter. In the same way, you can pass a project ID to include a task in a project. In order to maintain data integrity, it is not possible to run more than one operations in parallel.",
      "methodGroups": [
        {
          "name": "Get Folder Tree",
          "methods": [
            {
              "id": "GET:/folders/empty",
              "httpMethod": "GET",
              "path": "/folders",
              "comment": "Returns list of entries required to build a folder tree for the current account. This list contains the virtual root and recycle bin folders for the account, which can be used as root nodes for trees. Note: when any of query filter parameters are present (e.g. descendants\u003dfalse, metadata) response is switched to Folder model.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model22",
              "responseModelRef": "model23"
            },
            {
              "id": "GET:/folders/single/folders",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/folders",
              "comment": "Returns a list of tree entries for subtree of this folder. For root and recycle bin folders, returns folder subtrees of root and recycle bin respectively.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model24",
              "responseModelRef": "model23"
            },
            {
              "id": "GET:/spaces/single/folders",
              "httpMethod": "GET",
              "path": "/spaces/{spaceId}/folders",
              "comment": "Returns list of entries for subtree of this space.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model22",
              "responseModelRef": "model23"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Get Folder",
          "methods": [
            {
              "id": "GET:/folders/multi",
              "httpMethod": "GET",
              "path": "/folders/{folderId},{folderId},... - up to 100 IDs",
              "comment": "Returns complete information about specified folders.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model25",
              "responseModelRef": "model26"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Folder",
          "methods": [
            {
              "id": "POST:/folders/single/folders",
              "httpMethod": "POST",
              "path": "/folders/{folderId}/folders",
              "comment": "Create a folder within a folder. Specify virtual rootFolderId in order to create a folder in the account root.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model27",
              "responseModelRef": "model26"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Copy Folder",
          "methods": [
            {
              "id": "POST:/copy_folder/single",
              "httpMethod": "POST",
              "path": "/copy_folder/{folderId}",
              "comment": "Copy folder subtree, returns parent folder subtree.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model28",
              "responseModelRef": "model26"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Copy Folder async",
          "methods": [
            {
              "id": "POST:/copy_folder_async/single",
              "httpMethod": "POST",
              "path": "/copy_folder_async/{folderId}",
              "comment": "Copy folder subtree, returns async job.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model28",
              "responseModelRef": "model29"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Folder",
          "methods": [
            {
              "id": "PUT:/folders/single",
              "httpMethod": "PUT",
              "path": "/folders/{folderId}",
              "comment": "Update folder.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model30",
              "responseModelRef": "model26"
            },
            {
              "id": "PUT:/folders/multi",
              "httpMethod": "PUT",
              "path": "/folders/{folderId},{folderId},... - up to 100 IDs",
              "comment": "Update folders.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model31",
              "responseModelRef": "model26"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Folder",
          "methods": [
            {
              "id": "DELETE:/folders/single",
              "httpMethod": "DELETE",
              "path": "/folders/{folderId}",
              "comment": "Move folder and all descendant folders and tasks to Recycle Bin unless they have parents outside of deletion scope.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model26"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Tasks",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Tasks",
          "methods": [
            {
              "id": "GET:/tasks/empty",
              "httpMethod": "GET",
              "path": "/tasks",
              "comment": "Search among all tasks in current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model32",
              "responseModelRef": "model33"
            },
            {
              "id": "GET:/folders/single/tasks",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/tasks",
              "comment": "Search among tasks in the folder.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model32",
              "responseModelRef": "model33"
            },
            {
              "id": "GET:/spaces/single/tasks",
              "httpMethod": "GET",
              "path": "/spaces/{spaceId}/tasks",
              "comment": "Search among tasks in space.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model32",
              "responseModelRef": "model33"
            },
            {
              "id": "GET:/tasks/multi",
              "httpMethod": "GET",
              "path": "/tasks/{taskId},{taskId},... - up to 100 IDs",
              "comment": "Returns complete information about single or multiple tasks.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model34",
              "responseModelRef": "model33"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Task",
          "methods": [
            {
              "id": "POST:/folders/single/tasks",
              "httpMethod": "POST",
              "path": "/folders/{folderId}/tasks",
              "comment": "Create task in folder. You can specify rootFolderId to create task in user\u0027s account root.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model35",
              "responseModelRef": "model33"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Tasks",
          "methods": [
            {
              "id": "PUT:/tasks/single",
              "httpMethod": "PUT",
              "path": "/tasks/{taskId}",
              "comment": "Update task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model36",
              "responseModelRef": "model33"
            },
            {
              "id": "PUT:/tasks/multi",
              "httpMethod": "PUT",
              "path": "/tasks/{taskId},{taskId},... - up to 100 IDs",
              "comment": "Update tasks.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model37",
              "responseModelRef": "model33"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Tasks",
          "methods": [
            {
              "id": "DELETE:/tasks/single",
              "httpMethod": "DELETE",
              "path": "/tasks/{taskId}",
              "comment": "Delete task by Id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model33"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Comments",
      "details": null,
      "methodGroups": [
        {
          "name": "Get Comments",
          "methods": [
            {
              "id": "GET:/comments/empty",
              "httpMethod": "GET",
              "path": "/comments",
              "comment": "Get all comments in current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model38",
              "responseModelRef": "model39"
            },
            {
              "id": "GET:/folders/single/comments",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/comments",
              "comment": "Get folder comments.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model40",
              "responseModelRef": "model39"
            },
            {
              "id": "GET:/tasks/single/comments",
              "httpMethod": "GET",
              "path": "/tasks/{taskId}/comments",
              "comment": "Get task comments.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model40",
              "responseModelRef": "model39"
            },
            {
              "id": "GET:/comments/multi",
              "httpMethod": "GET",
              "path": "/comments/{commentId},{commentId},... - up to 100 IDs",
              "comment": "Get single or multiple comments by their IDs.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model40",
              "responseModelRef": "model39"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Comment",
          "methods": [
            {
              "id": "POST:/folders/single/comments",
              "httpMethod": "POST",
              "path": "/folders/{folderId}/comments",
              "comment": "Create a comment in the folder. The virtual Root and Recycle Bin folders cannot have comments.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model41",
              "responseModelRef": "model39"
            },
            {
              "id": "POST:/tasks/single/comments",
              "httpMethod": "POST",
              "path": "/tasks/{taskId}/comments",
              "comment": "Create comment in task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model41",
              "responseModelRef": "model39"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Update Comment",
          "methods": [
            {
              "id": "PUT:/comments/single",
              "httpMethod": "PUT",
              "path": "/comments/{commentId}",
              "comment": "Update Comment by ID. A comment is available for updates only during the 5 minutes after creation.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model42",
              "responseModelRef": "model39"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Comment",
          "methods": [
            {
              "id": "DELETE:/comments/single",
              "httpMethod": "DELETE",
              "path": "/comments/{commentId}",
              "comment": "Delete comment by ID.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": null
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Dependencies",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Dependencies",
          "methods": [
            {
              "id": "GET:/tasks/single/dependencies",
              "httpMethod": "GET",
              "path": "/tasks/{taskId}/dependencies",
              "comment": "Get task dependencies.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model43"
            },
            {
              "id": "GET:/dependencies/multi",
              "httpMethod": "GET",
              "path": "/dependencies/{dependencyId},{dependencyId},... - up to 100 IDs",
              "comment": "Returns complete information about single or multiple dependencies.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model43"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Dependency",
          "methods": [
            {
              "id": "POST:/tasks/single/dependencies",
              "httpMethod": "POST",
              "path": "/tasks/{taskId}/dependencies",
              "comment": "Add dependency between tasks.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model44",
              "responseModelRef": "model43"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Dependency",
          "methods": [
            {
              "id": "PUT:/dependencies/single",
              "httpMethod": "PUT",
              "path": "/dependencies/{dependencyId}",
              "comment": "Change relationType of task dependency.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model45",
              "responseModelRef": "model43"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Dependency",
          "methods": [
            {
              "id": "DELETE:/dependencies/single",
              "httpMethod": "DELETE",
              "path": "/dependencies/{dependencyId}",
              "comment": "Delete dependency between tasks.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model43"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Timelogs",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Timelogs",
          "methods": [
            {
              "id": "GET:/timelogs/empty",
              "httpMethod": "GET",
              "path": "/timelogs",
              "comment": "Get all timelog records in current account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model46",
              "responseModelRef": "model47"
            },
            {
              "id": "GET:/contacts/single/timelogs",
              "httpMethod": "GET",
              "path": "/contacts/{contactId}/timelogs",
              "comment": "Get all timelog records that were created by the user.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model46",
              "responseModelRef": "model47"
            },
            {
              "id": "GET:/folders/single/timelogs",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/timelogs",
              "comment": "Get all timelog records for a folder.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model46",
              "responseModelRef": "model47"
            },
            {
              "id": "GET:/tasks/single/timelogs",
              "httpMethod": "GET",
              "path": "/tasks/{taskId}/timelogs",
              "comment": "Get all timelog records for a task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model46",
              "responseModelRef": "model47"
            },
            {
              "id": "GET:/timelog_categories/single/timelogs",
              "httpMethod": "GET",
              "path": "/timelog_categories/{timelog_categoryId}/timelogs",
              "comment": "Get all timelog records with specific timelog category.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model46",
              "responseModelRef": "model47"
            },
            {
              "id": "GET:/timelogs/multi",
              "httpMethod": "GET",
              "path": "/timelogs/{timelogId},{timelogId},... - up to 100 IDs",
              "comment": "Get timelog record by IDs.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model48",
              "responseModelRef": "model47"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Timelog",
          "methods": [
            {
              "id": "POST:/tasks/single/timelogs",
              "httpMethod": "POST",
              "path": "/tasks/{taskId}/timelogs",
              "comment": "Create timelog record for task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model49",
              "responseModelRef": "model47"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Modify Timelog",
          "methods": [
            {
              "id": "PUT:/timelogs/single",
              "httpMethod": "PUT",
              "path": "/timelogs/{timelogId}",
              "comment": "Update timelog by Id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model50",
              "responseModelRef": "model47"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Timelog",
          "methods": [
            {
              "id": "DELETE:/timelogs/single",
              "httpMethod": "DELETE",
              "path": "/timelogs/{timelogId}",
              "comment": "Delete Timelog record by ID.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": null
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Timelog categories",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Timelog categories",
          "methods": [
            {
              "id": "GET:/timelog_categories/empty",
              "httpMethod": "GET",
              "path": "/timelog_categories",
              "comment": "Get timelog categories in account.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model51"
            }
          ],
          "scopes": [
            "Default",
            "amReadOnlyTimelogCategory",
            "amReadWriteTimelogCategory",
            "wsReadOnly",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Attachments",
      "details": null,
      "methodGroups": [
        {
          "name": "Get Attachments",
          "methods": [
            {
              "id": "GET:/attachments/empty",
              "httpMethod": "GET",
              "path": "/attachments",
              "comment": "Return all Attachments of account tasks and folders.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model52",
              "responseModelRef": "model53"
            },
            {
              "id": "GET:/folders/single/attachments",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/attachments",
              "comment": "Returns all Attachments of a folder.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model52",
              "responseModelRef": "model53"
            },
            {
              "id": "GET:/tasks/single/attachments",
              "httpMethod": "GET",
              "path": "/tasks/{taskId}/attachments",
              "comment": "Returns all Attachments of a task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model52",
              "responseModelRef": "model53"
            },
            {
              "id": "GET:/attachments/multi",
              "httpMethod": "GET",
              "path": "/attachments/{attachmentId},{attachmentId},... - up to 100 IDs",
              "comment": "Returns complete information about multiple attachments.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model54",
              "responseModelRef": "model53"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Download Wrike Attachment",
          "methods": [
            {
              "id": "GET:/attachments/single/download",
              "httpMethod": "GET",
              "path": "/attachments/{attachmentId}/download",
              "comment": "Returns attachment content. It can be accessed via /attachments/id/download/name.ext URL. In this case, \u0027name.ext\u0027 will be returned as the file name.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": null
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Download Attachment Preview",
          "methods": [
            {
              "id": "GET:/attachments/single/preview",
              "httpMethod": "GET",
              "path": "/attachments/{attachmentId}/preview",
              "comment": "Returns Preview for the attachment. The preview can be accessed via /attachments/id/preview/name.ext URL. In this case, \u0027name.ext\u0027 will be returned as the file name.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model55",
              "responseModelRef": null
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Get Access URL for Attachment",
          "methods": [
            {
              "id": "GET:/attachments/single/url",
              "httpMethod": "GET",
              "path": "/attachments/{attachmentId}/url",
              "comment": "Public URL to an attachment from Wrike or an external service. The link for attachment from Wrike is valid for 24 hours from when you make the request.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model56"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create Wrike Attachment",
          "methods": [
            {
              "id": "POST:/folders/single/attachments",
              "httpMethod": "POST",
              "path": "/folders/{folderId}/attachments",
              "comment": "Add an attachment to a folder.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model53"
            },
            {
              "id": "POST:/tasks/single/attachments",
              "httpMethod": "POST",
              "path": "/tasks/{taskId}/attachments",
              "comment": "Add an attachment to a task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model53"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Update Attachment",
          "methods": [
            {
              "id": "PUT:/attachments/single",
              "httpMethod": "PUT",
              "path": "/attachments/{attachmentId}",
              "comment": "Update previously uploaded Attachment with new version.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model57",
              "responseModelRef": "model53"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Delete Attachment",
          "methods": [
            {
              "id": "DELETE:/attachments/single",
              "httpMethod": "DELETE",
              "path": "/attachments/{attachmentId}",
              "comment": "Delete Attachment by ID.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": null
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Version",
      "details": null,
      "methodGroups": [
        {
          "name": "API Version",
          "methods": [
            {
              "id": "GET:/version/empty",
              "httpMethod": "GET",
              "path": "/version",
              "comment": "Returns current API version info.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model58"
            }
          ],
          "scopes": null
        }
      ]
    },
    {
      "name": "IDs",
      "details": null,
      "methodGroups": [
        {
          "name": "Legacy API v2 IDs converter",
          "methods": [
            {
              "id": "GET:/ids/empty",
              "httpMethod": "GET",
              "path": "/ids",
              "comment": "Convert APIv2 legacy IDs to APIv3 (compatible with APIv4) format for specific entity type.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model59",
              "responseModelRef": "model60"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Colors",
      "details": null,
      "methodGroups": [
        {
          "name": "Query Colors",
          "methods": [
            {
              "id": "GET:/colors/empty",
              "httpMethod": "GET",
              "path": "/colors",
              "comment": "Get color name - code mapping.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model61"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Spaces",
      "details": null,
      "methodGroups": [
        {
          "name": "Get Spaces",
          "methods": [
            {
              "id": "GET:/spaces/empty",
              "httpMethod": "GET",
              "path": "/spaces",
              "comment": "Returns a list of spaces.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model62",
              "responseModelRef": "model63"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Data Export",
      "details": "Data Export API allows you to export all account data for future import to third-party analytics tools (e.g. Tableau or PowerBI). The data is stored in tables, which are connected using foreign key identifiers (like in a relational database). Each table is stored as a separate \u003ca href\u003d\"https://en.wikipedia.org/wiki/Comma-separated_values\"\u003e.csv\u003c/a\u003e file, and the API returns a link for each file.\u003cbr\u003e\nThe CSV file links require authorization similar to all other API methods.\u003cbr\u003e\n\u003cbr\u003e\nDocumentation for Data Export schema and tables can be found \u003ca href\u003d\"https://developers.wrike.com/export-data\"\u003ehere\u003c/a\u003e.\u003cbr\u003e\n\u003cbr\u003e\nData Export takes time to be generated. If it’s the first time you generate a Data Export, a 202 response code is returned and generation starts automatically, so you can access your Export later. After the first time, the Export is automatically updated every day, and a new Export is available through API.\u003cbr\u003e\n\u003cbr\u003e\nThe API is available to account owners and admins on Enterprise plan with the right to ”Export account data”.",
      "methodGroups": [
        {
          "name": "Get Data Export",
          "methods": [
            {
              "id": "GET:/data_export/empty",
              "httpMethod": "GET",
              "path": "/data_export",
              "comment": "Get last completed Data Export.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model64"
            },
            {
              "id": "GET:/data_export/single",
              "httpMethod": "GET",
              "path": "/data_export/{data_exportId}",
              "comment": "Get Data Export specified by id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model64"
            }
          ],
          "scopes": [
            "dataExportFull"
          ]
        },
        {
          "name": "Refresh Data Export",
          "methods": [
            {
              "id": "POST:/data_export/empty",
              "httpMethod": "POST",
              "path": "/data_export",
              "comment": "Forces new data export generation (if it is not in progress already). 202 code is returned in case new export generation is started. Data export can be requested no sooner than 1 hour after last successful data export. If there is fresh data export already, 200 code and latest export in format similar to [GET] /data_export is returned.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model64"
            }
          ],
          "scopes": [
            "dataExportFull"
          ]
        },
        {
          "name": "Get Data Export Schema",
          "methods": [
            {
              "id": "GET:/data_export_schema/empty",
              "httpMethod": "GET",
              "path": "/data_export_schema",
              "comment": "Get data export schema specified by version.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model65",
              "responseModelRef": "model66"
            }
          ],
          "scopes": [
            "dataExportFull"
          ]
        }
      ]
    },
    {
      "name": "Audit Log",
      "details": null,
      "methodGroups": [
        {
          "name": "Get Audit Log",
          "methods": [
            {
              "id": "GET:/audit_log/empty",
              "httpMethod": "GET",
              "path": "/audit_log",
              "comment": "Get \u003ca href\u003d\"https://help.wrike.com/hc/en-us/articles/209606309-Audit-Log-Reports\"\u003eAudit Log Reports\u003c/a\u003e, that contains audit trail for actions in the account. Available to Enterprise admins with \"Create user activity reports\" right.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model67",
              "responseModelRef": "model68"
            }
          ],
          "scopes": [
            "amReadOnlyAuditLog"
          ]
        }
      ]
    },
    {
      "name": "Async job",
      "details": null,
      "methodGroups": [
        {
          "name": "Get async job",
          "methods": [
            {
              "id": "GET:/async_job/single",
              "httpMethod": "GET",
              "path": "/async_job/{async_jobId}",
              "comment": "Get Async job specified by id.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model29"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        }
      ]
    },
    {
      "name": "Approvals",
      "details": null,
      "methodGroups": [
        {
          "name": "Get approvals",
          "methods": [
            {
              "id": "GET:/approvals/empty",
              "httpMethod": "GET",
              "path": "/approvals",
              "comment": "Reads approvals by filter. When no filter parameters passed returns all approvals shared with a user.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model69",
              "responseModelRef": "model70"
            },
            {
              "id": "GET:/folders/single/approvals",
              "httpMethod": "GET",
              "path": "/folders/{folderId}/approvals",
              "comment": "Reads all approvals on folder/project.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model70"
            },
            {
              "id": "GET:/tasks/single/approvals",
              "httpMethod": "GET",
              "path": "/tasks/{taskId}/approvals",
              "comment": "Reads all approvals on task.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model70"
            },
            {
              "id": "GET:/approvals/multi",
              "httpMethod": "GET",
              "path": "/approvals/{approvalId},{approvalId},... - up to 100 IDs",
              "comment": "Reads approvals by ids.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model70"
            }
          ],
          "scopes": [
            "Default",
            "wsReadOnly",
            "wsReadWrite"
          ]
        },
        {
          "name": "Create approval",
          "methods": [
            {
              "id": "POST:/folders/single/approvals",
              "httpMethod": "POST",
              "path": "/folders/{folderId}/approvals",
              "comment": "Create an approval for folder/project. Creates approval in draft status when no approvers assigned. Otherwise creates in pending status. Approvals created via API will not be affected by workflow automation, e.g. task status will not be automatically transitioned when approval finishes.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model71",
              "responseModelRef": "model70"
            },
            {
              "id": "POST:/tasks/single/approvals",
              "httpMethod": "POST",
              "path": "/tasks/{taskId}/approvals",
              "comment": "Create an approval for task. Creates approval in draft status when no approvers assigned. Otherwise creates in pending status. Approvals created via API will not be affected by workflow automation, e.g. task status will not be automatically transitioned when approval finishes.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model71",
              "responseModelRef": "model70"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Update approval",
          "methods": [
            {
              "id": "PUT:/approvals/single",
              "httpMethod": "PUT",
              "path": "/approvals/{approvalId}",
              "comment": "Update approval.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": "model72",
              "responseModelRef": "model70"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        },
        {
          "name": "Cancel approval",
          "methods": [
            {
              "id": "DELETE:/approvals/single",
              "httpMethod": "DELETE",
              "path": "/approvals/{approvalId}",
              "comment": "Cancel approval.",
              "beta": false,
              "enterprise": false,
              "requestModelRef": null,
              "responseModelRef": "model70"
            }
          ],
          "scopes": [
            "Default",
            "wsReadWrite"
          ]
        }
      ]
    }
  ],
  "models": [
    {
      "model73": {
        "name": "Metadata entry key-value pair",
        "details": "Metadata entries are isolated on per-client (application) basis",
        "params": [
          {
            "name": "key",
            "type": "string",
            "subtype": null,
            "description": "Key should be less than 50 symbols and match following regular expression ([A-Za-z0-9_-]+)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "value",
            "type": "string",
            "subtype": null,
            "description": "Value should be less than 1000 symbols, compatible with JSON string. Use JSON \u0027null\u0027 in order to remove metadata entry",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model0": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "me",
            "type": "optional boolean",
            "subtype": null,
            "description": "If present - only contact info of requesting user is returned",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Metadata filter, exact match for metadata key or key-value pair",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "deleted",
            "type": "boolean",
            "subtype": null,
            "description": "Deleted flag filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: metadata",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Contact metadata"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model74": {
        "name": "User profile",
        "details": null,
        "params": [
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": null,
            "comment": "Account ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "email",
            "type": "string",
            "subtype": null,
            "description": "Email address associated with account",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "role",
            "type": "string",
            "subtype": null,
            "description": "Role in account",
            "comment": "UserRole, Enum: User, Collaborator",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "external",
            "type": "boolean",
            "subtype": null,
            "description": "Is user external",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "admin",
            "type": "boolean",
            "subtype": null,
            "description": "Is user account admin",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "owner",
            "type": "boolean",
            "subtype": null,
            "description": "Is user account owner",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model1": {
        "name": "Contact",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Contact ID",
            "description": null,
            "comment": "Contact ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "firstName",
            "type": "string",
            "subtype": null,
            "description": "First name",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "lastName",
            "type": "string",
            "subtype": null,
            "description": "Last name",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Type of the user",
            "comment": "UserType, Enum: Person, Group",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Person",
                "description": "Person"
              },
              {
                "value": "Group",
                "description": "Group of users. Group userId can be used in folder/task sharing requests only. It has no effect in other operations"
              }
            ],
            "modelRef": null
          },
          {
            "name": "profiles",
            "type": "array",
            "subtype": null,
            "description": "List of user profiles in accounts accessible for requesting user",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model74"
          },
          {
            "name": "avatarUrl",
            "type": "string",
            "subtype": null,
            "description": "Avatar URL",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "timezone",
            "type": "string",
            "subtype": null,
            "description": "Timezone Id, e.g \u0027America/New_York\u0027",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "locale",
            "type": "string",
            "subtype": null,
            "description": "Locale",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "deleted",
            "type": "boolean",
            "subtype": null,
            "description": "True if user is deleted, false otherwise",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "me",
            "type": "boolean",
            "subtype": null,
            "description": "Field is present and set to true only for requesting user",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "memberIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of group members contact IDs (field is present only for groups)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "List of contact metadata entries. Requesting user has read/write access to his own metadata, other entries are read-only",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "myTeam",
            "type": "boolean",
            "subtype": null,
            "description": "Field is present and set to true for My Team (default) group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "User Title",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "companyName",
            "type": "string",
            "subtype": null,
            "description": "User Company Name",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "phone",
            "type": "string",
            "subtype": null,
            "description": "User phone",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "location",
            "type": "string",
            "subtype": null,
            "description": "User location",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model2": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Metadata filter, exact match for metadata key or key-value pair",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: metadata",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Contact metadata"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model3": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be updated",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          }
        ]
      }
    },
    {
      "model75": {
        "name": "User Profile",
        "details": null,
        "params": [
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": null,
            "comment": "Account ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "role",
            "type": "string",
            "subtype": null,
            "description": "Role in account",
            "comment": "UserRole, Enum: User, Collaborator",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "external",
            "type": "boolean",
            "subtype": null,
            "description": "Make user external",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model4": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "profile",
            "type": "object",
            "subtype": null,
            "description": "Profile to be updated",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model75"
          }
        ]
      }
    },
    {
      "model5": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: metadata",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Group metadata entries"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model6": {
        "name": "Group",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Contact ID",
            "description": null,
            "comment": "Contact ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": null,
            "comment": "Account ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Group title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "memberIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of group members user IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "childIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of child group IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parentIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of parent group IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "avatarUrl",
            "type": "string",
            "subtype": null,
            "description": "Avatar URL",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "myTeam",
            "type": "boolean",
            "subtype": null,
            "description": "Field is present and set to true for My Team (default) group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "List of group metadata entries",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          }
        ]
      }
    },
    {
      "model7": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Metadata filter, exact match for metadata key or key-value pair",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: metadata",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Group metadata"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model76": {
        "name": "Group avatar",
        "details": null,
        "params": [
          {
            "name": "letters",
            "type": "string",
            "subtype": null,
            "description": "Group letters (2 symbols max)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "color",
            "type": "string",
            "subtype": null,
            "description": "Hex color code",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model8": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title of group, required",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "members",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Group users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parent",
            "type": "string",
            "subtype": "Contact ID",
            "description": "Parent group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "avatar",
            "type": "object",
            "subtype": null,
            "description": "Info for group avatar creation",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model76"
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be added to newly created group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          }
        ]
      }
    },
    {
      "model9": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title of group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addMembers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Add specified users to group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeMembers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Remove specified users from group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parent",
            "type": "string",
            "subtype": "Contact ID",
            "description": "Parent group",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "avatar",
            "type": "object",
            "subtype": null,
            "description": "Info for group avatar creation",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model76"
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be updated",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          }
        ]
      }
    },
    {
      "model10": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "test",
            "type": "optional boolean",
            "subtype": null,
            "description": "Check that group can be removed",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model11": {
        "name": "Invitation",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Invitation ID",
            "description": null,
            "comment": "Invitation ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": null,
            "comment": "Account ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "firstName",
            "type": "string",
            "subtype": null,
            "description": "First Name",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "lastName",
            "type": "string",
            "subtype": null,
            "description": "LastName",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "email",
            "type": "string",
            "subtype": null,
            "description": "Email",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Status",
            "comment": "Invitation status, Enum: Pending, Accepted, Declined, Cancelled",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "inviterUserId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "Inviter Contact ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "invitationDate",
            "type": "string",
            "subtype": null,
            "description": "Date when invitation was created",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "resolvedDate",
            "type": "string",
            "subtype": null,
            "description": "Date when the invitation was resolved",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "role",
            "type": "string",
            "subtype": null,
            "description": "Invited user role",
            "comment": "UserRole, Enum: User, Collaborator",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "external",
            "type": "boolean",
            "subtype": null,
            "description": "Is user external",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model12": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "email",
            "type": "string",
            "subtype": null,
            "description": "Create an invitation for current email",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "firstName",
            "type": "string",
            "subtype": null,
            "description": "First name of invited user",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "lastName",
            "type": "string",
            "subtype": null,
            "description": "Last name of invited user",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "role",
            "type": "string",
            "subtype": null,
            "description": "Set user role in account",
            "comment": "UserRole, Enum: User, Collaborator",
            "optional": true,
            "optionalDefault": "User",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "external",
            "type": "boolean",
            "subtype": null,
            "description": "Set external flag for invited user. Flag \u0027External\u0027 can be applied only to the role \u0027User\u0027",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "subject",
            "type": "string",
            "subtype": null,
            "description": "Custom message subject. Not available for free accounts",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "message",
            "type": "string",
            "subtype": null,
            "description": "Custom message body. Not available for free accounts",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model13": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "resend",
            "type": "boolean",
            "subtype": null,
            "description": "Resend invitation",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "role",
            "type": "string",
            "subtype": null,
            "description": "Change role of user in account for pending invitation",
            "comment": "UserRole, Enum: User, Collaborator",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "external",
            "type": "boolean",
            "subtype": null,
            "description": "Change external flag for pending invitation. Flag \u0027External\u0027 can be applied only to the role \u0027User\u0027",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model14": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Metadata filter, exact match for metadata key or key-value pair",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: subscription, metadata, customFields",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "subscription",
                "description": "Account subscription"
              },
              {
                "value": "metadata",
                "description": "Account metadata"
              },
              {
                "value": "customFields",
                "description": "Account custom fields"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model77": {
        "name": "Details about account subscription",
        "details": null,
        "params": [
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Subscription type",
            "comment": "Enum: Free, Premium, Business, CreativeBusiness, Enterprise, CreativeEnterprise",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "suspended",
            "type": "boolean",
            "subtype": null,
            "description": "Account is suspended",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "paid",
            "type": "boolean",
            "subtype": null,
            "description": "Subscription is paid (available only to account admins)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "userLimit",
            "type": "number",
            "subtype": null,
            "description": "Limit of subscription users (available only to account admins)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model78": {
        "name": "Custom field settings",
        "details": null,
        "params": [
          {
            "name": "inheritanceType",
            "type": "string",
            "subtype": null,
            "description": "Inheritance type",
            "comment": "Custom field inheritance type, Enum: All, Folders, Projects",
            "optional": true,
            "optionalDefault": "All",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "decimalPlaces",
            "type": "number",
            "subtype": null,
            "description": "Decimal places (only for Numeric, Percentage and Currency types)",
            "comment": null,
            "optional": true,
            "optionalDefault": "2",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "useThousandsSeparator",
            "type": "boolean",
            "subtype": null,
            "description": "Use thousands separator (only for Numeric type)",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "currency",
            "type": "string",
            "subtype": null,
            "description": "Currency (only for Currency type)",
            "comment": "Custom field currency, Enum: USD, EUR, GBP, RUB, BRL, AED, ARS, BYR, CAD, CLP, COP, CZK, DKK, HKD, HUF, INR, IDR, ILS, JPY, KRW, MYR, MXN, NZD, NOK, PEN, PHP, PLN, QAR, RON, SAR, SGD, ZAR, SEK, CHF, TWD, THB, TRY, UAH, VND, CNY, AUD, AMD, BWP",
            "optional": true,
            "optionalDefault": "USD",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "aggregation",
            "type": "string",
            "subtype": null,
            "description": "Aggregation type (only for Text, Numeric, Percentage, Currency, Duration, MultipleSelect and DropDown types)",
            "comment": "Custom field aggregation type, Enum: None, Sum, Average",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "values",
            "type": "array",
            "subtype": null,
            "description": "Dropdown values (only for DropDown and MultipleSelect type)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "allowOtherValues",
            "type": "boolean",
            "subtype": null,
            "description": "Allow users to input other values (only for DropDown type)",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contacts",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Allowed users or invitations (only for Users type)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model19": {
        "name": "Custom field description",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Custom Field ID",
            "description": null,
            "comment": "Custom Field ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": "Account ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Custom field title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Custom field type",
            "comment": "Type of custom field, Enum: Text, DropDown, Numeric, Currency, Percentage, Date, Duration, Checkbox, Contacts, Multiple",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Text",
                "description": "String field, Comparable field"
              },
              {
                "value": "DropDown",
                "description": "String field, Comparable field"
              },
              {
                "value": "Numeric",
                "description": "Comparable field"
              },
              {
                "value": "Currency",
                "description": "Comparable field"
              },
              {
                "value": "Percentage",
                "description": "Comparable field"
              },
              {
                "value": "Date",
                "description": "Comparable field"
              },
              {
                "value": "Duration",
                "description": "Comparable field"
              },
              {
                "value": "Checkbox",
                "description": "Boolean field"
              },
              {
                "value": "Contacts",
                "description": "Collection field"
              },
              {
                "value": "Multiple",
                "description": "Collection field"
              }
            ],
            "modelRef": null
          },
          {
            "name": "sharedIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of user IDs, who share the custom field",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "settings",
            "type": "object",
            "subtype": null,
            "description": "Custom field settings",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model78"
          }
        ]
      }
    },
    {
      "model15": {
        "name": "Account",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Account ID",
            "description": null,
            "comment": "Account ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name of account",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dateFormat",
            "type": "string",
            "subtype": null,
            "description": "Date format: dd/MM/yyyy or MM/dd/yyyy",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "firstDayOfWeek",
            "type": "string",
            "subtype": null,
            "description": "First day of week",
            "comment": "Week Day, Enum: Sat, Sun, Mon",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "workDays",
            "type": "array",
            "subtype": null,
            "description": "List of weekdays, not empty. These days are used in task duration computation",
            "comment": "Week Day, Enum: Sun, Mon, Tue, Wed, Thu, Fri, Sat",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "rootFolderId",
            "type": "string",
            "subtype": "Folder ID",
            "description": "Virtual folder, denotes the root folder of the account. Different users can have different elements in the root, according to their sharing scope. Can be used in queries to get all folders/tasks in the account, or to create folders/tasks in the user\u0027s account root",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "recycleBinId",
            "type": "string",
            "subtype": "Folder ID",
            "description": "Virtual folder, denotes the root for deleted folders and tasks. Can be used in queries to get all folders/tasks in the Recycle Bin. Cannot be used in modification queries.",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Registration date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "subscription",
            "type": "object",
            "subtype": null,
            "description": "Account subscription",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model77"
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "List of account metadata entries. Entries could be read by all users of account and modified by admins only",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "List of custom fields accessible for requesting user in the account",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model19"
          },
          {
            "name": "joinedDate",
            "type": "string",
            "subtype": null,
            "description": "Date when the user has joined the account",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model79": {
        "name": "Custom status",
        "details": "ID and group cannot be set simultaneously in request parameter,\nbut ID is required for update, and group is required for insert",
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Custom status ID",
            "description": null,
            "comment": "Custom status ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name (128 symbols max)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "standardName",
            "type": "boolean",
            "subtype": null,
            "description": "Whether status name is default or not",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "color",
            "type": "string",
            "subtype": null,
            "description": "Color name",
            "comment": "Custom status color, Enum: Brown, Red, Purple, Indigo, DarkBlue, Blue, Turquoise, DarkCyan, Green, YellowGreen, Yellow, Orange, Gray",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Brown",
                "description": "#795548"
              },
              {
                "value": "Red",
                "description": "#E91E63"
              },
              {
                "value": "Purple",
                "description": "#9C27B0"
              },
              {
                "value": "Indigo",
                "description": "#673AB7"
              },
              {
                "value": "DarkBlue",
                "description": "#3F51B5"
              },
              {
                "value": "Blue",
                "description": "#2196F3"
              },
              {
                "value": "Turquoise",
                "description": "#00BCD4"
              },
              {
                "value": "DarkCyan",
                "description": "#009688"
              },
              {
                "value": "Green",
                "description": "#8BC34A"
              },
              {
                "value": "YellowGreen",
                "description": "#CDDC39"
              },
              {
                "value": "Yellow",
                "description": "#FFEB3B"
              },
              {
                "value": "Orange",
                "description": "#FF9800"
              },
              {
                "value": "Gray",
                "description": "#9E9E9E"
              }
            ],
            "modelRef": null
          },
          {
            "name": "standard",
            "type": "boolean",
            "subtype": null,
            "description": "Defines default custom status (ignored in requests)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "group",
            "type": "string",
            "subtype": null,
            "description": "Custom status group",
            "comment": "Task Status, Enum: Active, Completed, Deferred, Cancelled",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hidden",
            "type": "boolean",
            "subtype": null,
            "description": "Custom status is hidden",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model16": {
        "name": "Workflow",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Workflow ID",
            "description": null,
            "comment": "Workflow ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name (128 symbols max)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "standard",
            "type": "boolean",
            "subtype": null,
            "description": "Defines default workflow",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hidden",
            "type": "boolean",
            "subtype": null,
            "description": "Workflow is hidden",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatuses",
            "type": "array",
            "subtype": null,
            "description": "Custom statuses",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model79"
          }
        ]
      }
    },
    {
      "model17": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name of workflow, required",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model18": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name of workflow (128 symbols max)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hidden",
            "type": "boolean",
            "subtype": null,
            "description": "Workflow is hidden",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatus",
            "type": "object",
            "subtype": null,
            "description": "Custom status",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model20": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Custom field title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Custom field type",
            "comment": "Type of custom field, Enum: Text, DropDown, Numeric, Currency, Percentage, Date, Duration, Checkbox, Contacts, Multiple",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Text",
                "description": "String field, Comparable field"
              },
              {
                "value": "DropDown",
                "description": "String field, Comparable field"
              },
              {
                "value": "Numeric",
                "description": "Comparable field"
              },
              {
                "value": "Currency",
                "description": "Comparable field"
              },
              {
                "value": "Percentage",
                "description": "Comparable field"
              },
              {
                "value": "Date",
                "description": "Comparable field"
              },
              {
                "value": "Duration",
                "description": "Comparable field"
              },
              {
                "value": "Checkbox",
                "description": "Boolean field"
              },
              {
                "value": "Contacts",
                "description": "Collection field"
              },
              {
                "value": "Multiple",
                "description": "Collection field"
              }
            ],
            "modelRef": null
          },
          {
            "name": "shareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Users to share custom field with",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "settings",
            "type": "object",
            "subtype": null,
            "description": "Custom field settings",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model78"
          }
        ]
      }
    },
    {
      "model21": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Custom field title",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Custom field type",
            "comment": "Type of custom field, Enum: Text, DropDown, Numeric, Currency, Percentage, Date, Duration, Checkbox, Contacts, Multiple",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Text",
                "description": "String field, Comparable field"
              },
              {
                "value": "DropDown",
                "description": "String field, Comparable field"
              },
              {
                "value": "Numeric",
                "description": "Comparable field"
              },
              {
                "value": "Currency",
                "description": "Comparable field"
              },
              {
                "value": "Percentage",
                "description": "Comparable field"
              },
              {
                "value": "Date",
                "description": "Comparable field"
              },
              {
                "value": "Duration",
                "description": "Comparable field"
              },
              {
                "value": "Checkbox",
                "description": "Boolean field"
              },
              {
                "value": "Contacts",
                "description": "Collection field"
              },
              {
                "value": "Multiple",
                "description": "Collection field"
              }
            ],
            "modelRef": null
          },
          {
            "name": "addShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Share custom field with specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Unshare custom field from specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "settings",
            "type": "object",
            "subtype": null,
            "description": "Custom field type settings",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model78"
          }
        ]
      }
    },
    {
      "model80": {
        "name": "Custom field filter",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Custom Field ID",
            "description": null,
            "comment": "Custom Field ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "comparator",
            "type": "string",
            "subtype": null,
            "description": "Custom field comparator. See list below for available comparators and field types they are applicable to. Available custom field types are listed in \u003ca href\u003d\"https://developers.wrike.com/documentation/api/methods/query-custom-fields\"\u003eQuery Custom Fields\u003c/a\u003e method.",
            "comment": "Enum: EqualTo, IsEmpty, IsNotEmpty, LessThan, LessOrEqualTo, GreaterThan, GreaterOrEqualTo, InRange, NotInRange, Contains, StartsWith, EndsWith, ContainsAll, ContainsAny",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "EqualTo",
                "description": "For all field types"
              },
              {
                "value": "IsEmpty",
                "description": "For all field types"
              },
              {
                "value": "IsNotEmpty",
                "description": "For all field types"
              },
              {
                "value": "LessThan",
                "description": "For comparable field types"
              },
              {
                "value": "LessOrEqualTo",
                "description": "For comparable field types"
              },
              {
                "value": "GreaterThan",
                "description": "For comparable field types"
              },
              {
                "value": "GreaterOrEqualTo",
                "description": "For comparable field types"
              },
              {
                "value": "InRange",
                "description": "For comparable field types"
              },
              {
                "value": "NotInRange",
                "description": "For comparable field types"
              },
              {
                "value": "Contains",
                "description": "For string field types"
              },
              {
                "value": "StartsWith",
                "description": "For string field types"
              },
              {
                "value": "EndsWith",
                "description": "For string field types"
              },
              {
                "value": "ContainsAll",
                "description": "For collection field types"
              },
              {
                "value": "ContainsAny",
                "description": "For collection field types"
              }
            ],
            "modelRef": null
          },
          {
            "name": "value",
            "type": "string",
            "subtype": null,
            "description": "Custom field value",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "minValue",
            "type": "string",
            "subtype": null,
            "description": "Custom field min value",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "maxValue",
            "type": "string",
            "subtype": null,
            "description": "Custom field max value",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "values",
            "type": "array",
            "subtype": null,
            "description": "Custom field possible values",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model81": {
        "name": "Timestamp semi-open interval",
        "details": null,
        "params": [
          {
            "name": "start",
            "type": "string",
            "subtype": null,
            "description": "Range start",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "end",
            "type": "string",
            "subtype": null,
            "description": "Range end",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model22": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "permalink",
            "type": "string",
            "subtype": null,
            "description": "Folder permalink, exact match",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "descendants",
            "type": "boolean",
            "subtype": null,
            "description": "Adds all descendant folders to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Folders metadata filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customField",
            "type": "object",
            "subtype": null,
            "description": "Custom field filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model80"
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Updated date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "project",
            "type": "boolean",
            "subtype": null,
            "description": "Get only projects (true) / only folders (false)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "deleted",
            "type": "boolean",
            "subtype": null,
            "description": "Get folders from Root (false) / Recycle Bin (true)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contractTypes",
            "type": "string",
            "subtype": null,
            "description": "Contract type filter (Wrike Resource only)",
            "comment": "Project Contract Type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional Fields (for filtered requests only (Folder Model)), Enum: metadata, hasAttachments, attachmentCount, description, briefDescription, customFields, customColumnIds, superParentIds, space, contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Folder metadata entries"
              },
              {
                "value": "hasAttachments",
                "description": "Has attachments"
              },
              {
                "value": "attachmentCount",
                "description": "Attachment count"
              },
              {
                "value": "description",
                "description": "Description"
              },
              {
                "value": "briefDescription",
                "description": "Brief description"
              },
              {
                "value": "customFields",
                "description": "Custom fields"
              },
              {
                "value": "customColumnIds",
                "description": "Associated custom field IDs"
              },
              {
                "value": "superParentIds",
                "description": "List of super parent folder IDs (applicable to \u0027Selective Sharing\u0027 labs feature)"
              },
              {
                "value": "space",
                "description": "Is folder a space"
              },
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model82": {
        "name": "Details about project contained in folder",
        "details": null,
        "params": [
          {
            "name": "authorId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "ID of user who created project",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "ownerIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of project owner IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Project status",
            "comment": "Enum: Green, Yellow, Red, Completed, OnHold, Cancelled, Custom",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatusId",
            "type": "string",
            "subtype": "Custom status ID",
            "description": "Custom status ID. Empty if status is not Custom",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "startDate",
            "type": "string",
            "subtype": null,
            "description": "Project start date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "endDate",
            "type": "string",
            "subtype": null,
            "description": "Project end date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Project created date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "completedDate",
            "type": "string",
            "subtype": null,
            "description": "Project completed date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contractType",
            "type": "string",
            "subtype": null,
            "description": "Contract type (Wrike Resource only)",
            "comment": "Project Contract Type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model23": {
        "name": "Folder Tree",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Folder ID",
            "description": null,
            "comment": "Folder ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "color",
            "type": "string",
            "subtype": null,
            "description": "Color",
            "comment": "Folder color, Enum: None, Person, Purple1, Purple2, Purple3, Purple4, Indigo1, Indigo2, Indigo3, Indigo4, DarkBlue1, DarkBlue2, DarkBlue3, DarkBlue4, Blue1, Blue2, Blue3, Blue4, Turquoise1, Turquoise2, Turquoise3, Turquoise4, DarkCyan1, DarkCyan2, DarkCyan3, DarkCyan4, Green1, Green2, Green3, Green4, YellowGreen1, YellowGreen2, YellowGreen3, YellowGreen4, Yellow1, Yellow2, Yellow3, Yellow4, Orange1, Orange2, Orange3, Orange4, Red1, Red2, Red3, Red4, Pink1, Pink2, Pink3, Pink4, Gray1, Gray2, Gray3",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "childIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Child folder IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "scope",
            "type": "string",
            "subtype": null,
            "description": "Folder scope",
            "comment": "Tree Scope, Enum: WsRoot, RbRoot, WsFolder, RbFolder, WsTask, RbTask",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "WsRoot",
                "description": "Virtual root folder of account"
              },
              {
                "value": "RbRoot",
                "description": "Virtual Recycle Bin folder of account"
              },
              {
                "value": "WsFolder",
                "description": "Folder in account"
              },
              {
                "value": "RbFolder",
                "description": "Folder is in Recycle Bin (deleted folder)"
              },
              {
                "value": "WsTask",
                "description": "Task in account"
              },
              {
                "value": "RbTask",
                "description": "Task is in Recycle Bin (deleted task)"
              }
            ],
            "modelRef": null
          },
          {
            "name": "project",
            "type": "object",
            "subtype": null,
            "description": "Project details, present only for project folders",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model82"
          },
          {
            "name": "space",
            "type": "boolean",
            "subtype": null,
            "description": "Is folder a space",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model24": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "permalink",
            "type": "string",
            "subtype": null,
            "description": "Folder permalink, exact match",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "descendants",
            "type": "boolean",
            "subtype": null,
            "description": "Adds all descendant folders to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Folders metadata filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customField",
            "type": "object",
            "subtype": null,
            "description": "Custom field filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model80"
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Updated date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "project",
            "type": "boolean",
            "subtype": null,
            "description": "Get only projects (true) / only folders (false)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contractTypes",
            "type": "string",
            "subtype": null,
            "description": "Contract type filter (Wrike Resource only)",
            "comment": "Project Contract Type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional Fields (for filtered requests only (Folder Model)), Enum: metadata, hasAttachments, attachmentCount, description, briefDescription, customFields, customColumnIds, superParentIds, space, contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "metadata",
                "description": "Folder metadata entries"
              },
              {
                "value": "hasAttachments",
                "description": "Has attachments"
              },
              {
                "value": "attachmentCount",
                "description": "Attachment count"
              },
              {
                "value": "description",
                "description": "Description"
              },
              {
                "value": "briefDescription",
                "description": "Brief description"
              },
              {
                "value": "customFields",
                "description": "Custom fields"
              },
              {
                "value": "customColumnIds",
                "description": "Associated custom field IDs"
              },
              {
                "value": "superParentIds",
                "description": "List of super parent folder IDs (applicable to \u0027Selective Sharing\u0027 labs feature)"
              },
              {
                "value": "space",
                "description": "Is folder a space"
              },
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model25": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: briefDescription, customColumnIds, attachmentCount, contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "briefDescription",
                "description": "Get brief description"
              },
              {
                "value": "customColumnIds",
                "description": "Associated custom field IDs"
              },
              {
                "value": "attachmentCount",
                "description": "Attachment count"
              },
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model83": {
        "name": "Custom field",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Custom Field ID",
            "description": null,
            "comment": "Custom Field ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "value",
            "type": "string",
            "subtype": null,
            "description": "Custom field value. 2000 characters max",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model26": {
        "name": "Folder",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Folder ID",
            "description": null,
            "comment": "Folder ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": "Account ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Created date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "string",
            "subtype": null,
            "description": "Updated date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "briefDescription",
            "type": "string",
            "subtype": null,
            "description": "Brief description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Description",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "color",
            "type": "string",
            "subtype": null,
            "description": "Color",
            "comment": "Folder color, Enum: None, Person, Purple1, Purple2, Purple3, Purple4, Indigo1, Indigo2, Indigo3, Indigo4, DarkBlue1, DarkBlue2, DarkBlue3, DarkBlue4, Blue1, Blue2, Blue3, Blue4, Turquoise1, Turquoise2, Turquoise3, Turquoise4, DarkCyan1, DarkCyan2, DarkCyan3, DarkCyan4, Green1, Green2, Green3, Green4, YellowGreen1, YellowGreen2, YellowGreen3, YellowGreen4, Yellow1, Yellow2, Yellow3, Yellow4, Orange1, Orange2, Orange3, Orange4, Red1, Red2, Red3, Red4, Pink1, Pink2, Pink3, Pink4, Gray1, Gray2, Gray3",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "sharedIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of user IDs, who share the folder",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parentIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "List of parent folder IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "childIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "List of child folder IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "superParentIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "List of super parent folder IDs (applicable to \u0027Selective Sharing\u0027 labs feature)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "scope",
            "type": "string",
            "subtype": null,
            "description": "Folder scope",
            "comment": "Tree Scope, Enum: WsRoot, RbRoot, WsFolder, RbFolder, WsTask, RbTask",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "WsRoot",
                "description": "Virtual root folder of account"
              },
              {
                "value": "RbRoot",
                "description": "Virtual Recycle Bin folder of account"
              },
              {
                "value": "WsFolder",
                "description": "Folder in account"
              },
              {
                "value": "RbFolder",
                "description": "Folder is in Recycle Bin (deleted folder)"
              },
              {
                "value": "WsTask",
                "description": "Task in account"
              },
              {
                "value": "RbTask",
                "description": "Task is in Recycle Bin (deleted task)"
              }
            ],
            "modelRef": null
          },
          {
            "name": "hasAttachments",
            "type": "boolean",
            "subtype": null,
            "description": "True if folder has attachments",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "attachmentCount",
            "type": "number",
            "subtype": null,
            "description": "Total count of folder attachments",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "permalink",
            "type": "string",
            "subtype": null,
            "description": "Link to open folder in web workspace, if user has appropriate access",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "workflowId",
            "type": "string",
            "subtype": "Workflow ID",
            "description": "Folder workflow ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "List of folder metadata entries",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "customColumnIds",
            "type": "array",
            "subtype": "Custom Field ID",
            "description": "Custom column IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "project",
            "type": "object",
            "subtype": null,
            "description": "Project details, present only for project folders",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model82"
          }
        ]
      }
    },
    {
      "model84": {
        "name": "Projects details to create project",
        "details": null,
        "params": [
          {
            "name": "ownerIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of project owner IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Project status. Use this parameter to set status to one of these: Green, Yellow, Red, Completed, OnHold, Cancelled.",
            "comment": "Enum: Green, Yellow, Red, Completed, OnHold, Cancelled, Custom",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatusId",
            "type": "string",
            "subtype": null,
            "description": "Project custom status ID. Use this parameter if status value is not one of specified above",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "startDate",
            "type": "string",
            "subtype": null,
            "description": "Project start date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "endDate",
            "type": "string",
            "subtype": null,
            "description": "Project end date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contractType",
            "type": "string",
            "subtype": null,
            "description": "Contract type (Wrike Resource only)",
            "comment": "Project Contract Type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model27": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title, cannot be empty",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Folder description. If not specified, will be left blank",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "shareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Users to share folder with. Folder is always shared with creator",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be added to newly created folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "List of custom fields to be set upon task creation",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "customColumns",
            "type": "array",
            "subtype": "Custom Field ID",
            "description": "List of custom fields associated with folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "project",
            "type": "object",
            "subtype": null,
            "description": "Project settings in order to create project",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model84"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model85": {
        "name": "Projects details to update project",
        "details": null,
        "params": [
          {
            "name": "ownersAdd",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of userIds to be added as owners",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "ownersRemove",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of userIds to be removed from owners",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Project status. Use this parameter to set status to one of these: Green, Yellow, Red, Completed, OnHold, Cancelled.",
            "comment": "Enum: Green, Yellow, Red, Completed, OnHold, Cancelled, Custom",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatusId",
            "type": "string",
            "subtype": null,
            "description": "Project custom status ID. Use this parameter if status value is not one of specified above",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "startDate",
            "type": "string",
            "subtype": null,
            "description": "Project start date (null value to remove)",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "endDate",
            "type": "string",
            "subtype": null,
            "description": "Project end date (null value to remove)",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "contractType",
            "type": "string",
            "subtype": null,
            "description": "Contract type (Wrike Resource only)",
            "comment": "Project Contract Type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model30": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Folder description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addParents",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Parent folders from same account to add, cannot contain rootFolderId and recycleBinId",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeParents",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Parent folders from same account to remove, cannot contain rootFolderId and recycleBinId",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Share folder with specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Unshare folder from specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be updated",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "restore",
            "type": "boolean",
            "subtype": null,
            "description": "Restore folder from Recycled Bin",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields to be updated or deleted (null value removes field)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "customColumns",
            "type": "array",
            "subtype": "Custom Field ID",
            "description": "List of custom fields associated with folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "project",
            "type": "object",
            "subtype": null,
            "description": "Project settings (update project or convert folder to project). Use null value to convert project to folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model85"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model31": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields to be updated or deleted (null value removes field)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: contractType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "contractType",
                "description": "Contract type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model86": {
        "name": "DateTime exact match or semi-open interval",
        "details": null,
        "params": [
          {
            "name": "start",
            "type": "string",
            "subtype": null,
            "description": "Range start",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss (\u0027T\u0027HH:mm:ss is optional)",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "equal",
            "type": "string",
            "subtype": null,
            "description": "Date exact match value",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss (\u0027T\u0027HH:mm:ss is optional)",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "end",
            "type": "string",
            "subtype": null,
            "description": "Range end",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss (\u0027T\u0027HH:mm:ss is optional)",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model87": {
        "name": "Date exact match or semi-open interval",
        "details": null,
        "params": [
          {
            "name": "start",
            "type": "string",
            "subtype": null,
            "description": "Range start",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "equal",
            "type": "string",
            "subtype": null,
            "description": "Date exact match value",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "end",
            "type": "string",
            "subtype": null,
            "description": "Range end",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model32": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "descendants",
            "type": "optional boolean",
            "subtype": null,
            "description": "Adds all descendant folders to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title filter, exact match",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "array",
            "subtype": null,
            "description": "Status filter, match with any of specified constants",
            "comment": "Task Status, Enum: Active, Completed, Deferred, Cancelled",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "importance",
            "type": "string",
            "subtype": null,
            "description": "Importance filter, exact match",
            "comment": "Task Importance, Enum: High, Normal, Low",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "startDate",
            "type": "object",
            "subtype": null,
            "description": "Start date filter, date match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model86"
          },
          {
            "name": "dueDate",
            "type": "object",
            "subtype": null,
            "description": "Due date filter, date match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model86"
          },
          {
            "name": "scheduledDate",
            "type": "object",
            "subtype": null,
            "description": "Scheduled date filter. Both dates should be set in ranged version.\nReturns all tasks that have schedule intersecting with specified interval, date match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model87"
          },
          {
            "name": "createdDate",
            "type": "object",
            "subtype": null,
            "description": "Created date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Updated date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "completedDate",
            "type": "object",
            "subtype": null,
            "description": "Completed date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "authors",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Authors filter, match of any",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "responsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Responsibles filter, match of any",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "permalink",
            "type": "string",
            "subtype": null,
            "description": "Task permalink, exact match",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Task type",
            "comment": "Task Dates, Enum: Backlog, Milestone, Planned",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "limit",
            "type": "number",
            "subtype": null,
            "description": "Limit on number of returned tasks",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "sortField",
            "type": "string",
            "subtype": null,
            "description": "Sort field",
            "comment": "Enum: CreatedDate, UpdatedDate, CompletedDate, DueDate, Status, Importance, Title, LastAccessDate",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "CreatedDate",
                "description": "Sort by created date"
              },
              {
                "value": "UpdatedDate",
                "description": "Sort by updated date"
              },
              {
                "value": "CompletedDate",
                "description": "Sort by completed date"
              },
              {
                "value": "DueDate",
                "description": "Sort by due date"
              },
              {
                "value": "Status",
                "description": "Sort by status"
              },
              {
                "value": "Importance",
                "description": "Sort by importance"
              },
              {
                "value": "Title",
                "description": "Lexicographic sorting by title"
              },
              {
                "value": "LastAccessDate",
                "description": "Sort by last access date"
              }
            ],
            "modelRef": null
          },
          {
            "name": "sortOrder",
            "type": "string",
            "subtype": null,
            "description": "Sort order",
            "comment": "Enum: Asc, Desc",
            "optional": true,
            "optionalDefault": "Asc",
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Asc",
                "description": "Ascending sort order"
              },
              {
                "value": "Desc",
                "description": "Descending sort order"
              }
            ],
            "modelRef": null
          },
          {
            "name": "subTasks",
            "type": "optional boolean",
            "subtype": null,
            "description": "Adds subtasks to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "pageSize",
            "type": "number",
            "subtype": null,
            "description": "Page size",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "nextPageToken",
            "type": "string",
            "subtype": null,
            "description": "Next page token, overrides any other parameters in request",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "object",
            "subtype": null,
            "description": "Task metadata filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customField",
            "type": "object",
            "subtype": null,
            "description": "Custom field filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model80"
          },
          {
            "name": "customStatuses",
            "type": "array",
            "subtype": "Custom status ID",
            "description": "Custom statuses filter",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "billingTypes",
            "type": "string",
            "subtype": null,
            "description": "Timelog billing types filter (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: authorIds, hasAttachments, attachmentCount, parentIds, superParentIds, sharedIds, responsibleIds, description, briefDescription, recurrent, superTaskIds, subTaskIds, dependencyIds, metadata, customFields, effortAllocation, billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "authorIds",
                "description": "Author IDs"
              },
              {
                "value": "hasAttachments",
                "description": "Has attachments"
              },
              {
                "value": "attachmentCount",
                "description": "Attachment count"
              },
              {
                "value": "parentIds",
                "description": "List of task parent folder"
              },
              {
                "value": "superParentIds",
                "description": "List of folder IDs inherited from parent task"
              },
              {
                "value": "sharedIds",
                "description": "List of user IDs, who have task share"
              },
              {
                "value": "responsibleIds",
                "description": "List of responsible user IDs"
              },
              {
                "value": "description",
                "description": "Description"
              },
              {
                "value": "briefDescription",
                "description": "Brief description"
              },
              {
                "value": "recurrent",
                "description": "Is a task recurrent"
              },
              {
                "value": "superTaskIds",
                "description": "List of supertask IDs"
              },
              {
                "value": "subTaskIds",
                "description": "List of subtask IDs"
              },
              {
                "value": "dependencyIds",
                "description": "Dependency IDs"
              },
              {
                "value": "metadata",
                "description": "Task metadata entries"
              },
              {
                "value": "customFields",
                "description": "Custom fields"
              },
              {
                "value": "effortAllocation",
                "description": "Effort Allocation (Wrike Resource only)"
              },
              {
                "value": "billingType",
                "description": "Billing type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model88": {
        "name": "Task Dates",
        "details": "Field values limits:\nduration - [0, 1800000)\nstart \u0026 due - [1970-01-01T00:00:00, 2100-01-01T00:00:00)",
        "params": [
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Type",
            "comment": "Task Dates, Enum: Backlog, Milestone, Planned",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "duration",
            "type": "number",
            "subtype": null,
            "description": "Duration in minutes. Duration is present in Planned tasks and is optional for Backlog tasks",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "start",
            "type": "string",
            "subtype": null,
            "description": "Start date is present only in Planned tasks",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss (\u0027T\u0027HH:mm:ss is optional)",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "due",
            "type": "string",
            "subtype": null,
            "description": "Due date is present only in Planned and Milestone tasks",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss (\u0027T\u0027HH:mm:ss is optional)",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "workOnWeekends",
            "type": "boolean",
            "subtype": null,
            "description": "Weekends are included in task scheduling",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model89": {
        "name": "Task Effort (Wrike Resource only)",
        "details": null,
        "params": [
          {
            "name": "mode",
            "type": "string",
            "subtype": null,
            "description": "Task Effort mode",
            "comment": "Enum: None, FullTime, Basic, Flexible",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "totalEffort",
            "type": "number",
            "subtype": null,
            "description": "Task total Effort in minutes",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "allocatedEffort",
            "type": "number",
            "subtype": null,
            "description": "Task allocated Effort in minutes",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model33": {
        "name": "Task",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Task ID",
            "description": null,
            "comment": "Task ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accountId",
            "type": "string",
            "subtype": "Account ID",
            "description": "Account ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title, cannot be empty",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "briefDescription",
            "type": "string",
            "subtype": null,
            "description": "Brief description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parentIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "List of task parent folder IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "superParentIds",
            "type": "array",
            "subtype": "Folder ID",
            "description": "List of folder IDs inherited from parent task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "sharedIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of user IDs, who share the task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "responsibleIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of responsible user IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Status of task",
            "comment": "Task Status, Enum: Active, Completed, Deferred, Cancelled",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "importance",
            "type": "string",
            "subtype": null,
            "description": "Importance of task",
            "comment": "Task Importance, Enum: High, Normal, Low",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Created date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "string",
            "subtype": null,
            "description": "Updated date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "completedDate",
            "type": "string",
            "subtype": null,
            "description": "Completed date, field is present for tasks with \u0027Completed\u0027 status",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dates",
            "type": "object",
            "subtype": null,
            "description": "Task dates",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model88"
          },
          {
            "name": "scope",
            "type": "string",
            "subtype": null,
            "description": "Task scope",
            "comment": "Tree Scope, Enum: WsRoot, RbRoot, WsFolder, RbFolder, WsTask, RbTask",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "WsRoot",
                "description": "Virtual root folder of account"
              },
              {
                "value": "RbRoot",
                "description": "Virtual Recycle Bin folder of account"
              },
              {
                "value": "WsFolder",
                "description": "Folder in account"
              },
              {
                "value": "RbFolder",
                "description": "Folder is in Recycle Bin (deleted folder)"
              },
              {
                "value": "WsTask",
                "description": "Task in account"
              },
              {
                "value": "RbTask",
                "description": "Task is in Recycle Bin (deleted task)"
              }
            ],
            "modelRef": null
          },
          {
            "name": "authorIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of author IDs (currently contains 1 element)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "customStatusId",
            "type": "string",
            "subtype": "Custom status ID",
            "description": "Custom status ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hasAttachments",
            "type": "boolean",
            "subtype": null,
            "description": "Has attachments",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "attachmentCount",
            "type": "number",
            "subtype": null,
            "description": "Total count of task attachments",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "permalink",
            "type": "string",
            "subtype": null,
            "description": "Link to open task in web workspace, if user has appropriate access",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "priority",
            "type": "string",
            "subtype": null,
            "description": "Ordering key that defines task order in tasklist",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "followedByMe",
            "type": "boolean",
            "subtype": null,
            "description": "Is a task followed by me",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "followerIds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "List of user IDs, who follows task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "recurrent",
            "type": "boolean",
            "subtype": null,
            "description": "Is a task recurrent",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "superTaskIds",
            "type": "array",
            "subtype": "Task ID",
            "description": "List of super task IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "subTaskIds",
            "type": "array",
            "subtype": "Task ID",
            "description": "List of subtask IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dependencyIds",
            "type": "array",
            "subtype": "Dependency ID",
            "description": "List of dependency IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "List of task metadata entries",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "billingType",
            "type": "string",
            "subtype": null,
            "description": "Task\u0027s timelogs billing type (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "effortAllocation",
            "type": "object",
            "subtype": null,
            "description": "Effort (Wrike Resource only)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model89"
          }
        ]
      }
    },
    {
      "model34": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: recurrent, attachmentCount, effortAllocation, billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "recurrent",
                "description": "Add field to indicate if task is recurrent"
              },
              {
                "value": "attachmentCount",
                "description": "Attachment count"
              },
              {
                "value": "effortAllocation",
                "description": "Effort Allocation (Wrike Resource only)"
              },
              {
                "value": "billingType",
                "description": "Billing type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model35": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title of task, required",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Description of task, will be left blank, if not set",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Status of task",
            "comment": "Task Status, Enum: Active, Completed, Deferred, Cancelled",
            "optional": true,
            "optionalDefault": "Active",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "importance",
            "type": "string",
            "subtype": null,
            "description": "Importance of task",
            "comment": "Task Importance, Enum: High, Normal, Low",
            "optional": true,
            "optionalDefault": "Normal",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dates",
            "type": "object",
            "subtype": null,
            "description": "Task dates. If not specified, a backlogged task is created",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model88"
          },
          {
            "name": "shareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Shares task with specified users. The task is always shared with the author.",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "parents",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Parent folders for newly created task. Can not contain recycleBinId",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": true,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "responsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Makes specified users responsible for the task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "followers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Add specified users to task followers",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "follow",
            "type": "boolean",
            "subtype": null,
            "description": "Follow task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "priorityBefore",
            "type": "string",
            "subtype": "Task ID",
            "description": "Put newly created task before specified task in task list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "priorityAfter",
            "type": "string",
            "subtype": "Task ID",
            "description": "Put newly created task after specified task in task list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "superTasks",
            "type": "array",
            "subtype": "Task ID",
            "description": "Add the task as subtask to specified tasks",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be added to newly created task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "List of custom fields to set in newly created task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "customStatus",
            "type": "string",
            "subtype": "Custom status ID",
            "description": "Custom status ID",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "effortAllocation",
            "type": "object",
            "subtype": null,
            "description": "Set Task Effort fields: mode, total Effort (Wrike Resource only)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model89"
          },
          {
            "name": "billingType",
            "type": "string",
            "subtype": null,
            "description": "Task\u0027s timelogs billing type (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: effortAllocation, billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "effortAllocation",
                "description": "Effort Allocation (Wrike Resource only)"
              },
              {
                "value": "billingType",
                "description": "Billing type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model36": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title of task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Task Description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Task status",
            "comment": "Task Status, Enum: Active, Completed, Deferred, Cancelled",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "importance",
            "type": "string",
            "subtype": null,
            "description": "Task importance",
            "comment": "Task Importance, Enum: High, Normal, Low",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dates",
            "type": "object",
            "subtype": null,
            "description": "Reschedule task and/or change task type",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model88"
          },
          {
            "name": "addParents",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Put task into specified folders of same account. Cannot contain RecycleBin folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeParents",
            "type": "array",
            "subtype": "Folder ID",
            "description": "Remove task from specified folders. Can not contain RecycleBin folder",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Shared task with specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeShareds",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Unshare task from specified users",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addResponsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Add specified users to responsible list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeResponsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Remove specified users from responsible list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addFollowers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Add specified users to task followers",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "follow",
            "type": "boolean",
            "subtype": null,
            "description": "Follow task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "priorityBefore",
            "type": "string",
            "subtype": "Task ID",
            "description": "Put task in task list before specified task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "priorityAfter",
            "type": "string",
            "subtype": "Task ID",
            "description": "Put task in task list after specified task",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addSuperTasks",
            "type": "array",
            "subtype": "Task ID",
            "description": "Add the task as subtask to specified tasks",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeSuperTasks",
            "type": "array",
            "subtype": "Task ID",
            "description": "Remove the task form specified tasks subtasks",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "metadata",
            "type": "array",
            "subtype": null,
            "description": "Metadata to be updated (null value removes entry)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model73"
          },
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields to be updated or deleted (null value removes field)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "customStatus",
            "type": "string",
            "subtype": "Custom status ID",
            "description": "Custom status ID",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "restore",
            "type": "boolean",
            "subtype": null,
            "description": "Restore task from Recycled Bin",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "effortAllocation",
            "type": "object",
            "subtype": null,
            "description": "Set Task Effort fields: mode, total Effort (Wrike Resource only)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model89"
          },
          {
            "name": "billingType",
            "type": "string",
            "subtype": null,
            "description": "Task\u0027s timelogs billing type (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: effortAllocation, billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "effortAllocation",
                "description": "Effort Allocation (Wrike Resource only)"
              },
              {
                "value": "billingType",
                "description": "Billing type"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model37": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "customFields",
            "type": "array",
            "subtype": null,
            "description": "Custom fields to be updated or deleted (null value removes field)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model83"
          },
          {
            "name": "effortAllocation",
            "type": "object",
            "subtype": null,
            "description": "Set Task Effort fields: mode, total Effort (Wrike Resource only)",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model89"
          }
        ]
      }
    },
    {
      "model40": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model39": {
        "name": "Comment",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Comment ID",
            "description": null,
            "comment": "Comment ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "authorId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "Author ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "text",
            "type": "string",
            "subtype": null,
            "description": "Comment text",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Created date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "taskId",
            "type": "string",
            "subtype": null,
            "description": "ID of related task. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "folderId",
            "type": "string",
            "subtype": null,
            "description": "ID of related folder. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model38": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Updated date filter, get all comments created or updated in the range specified by dates. Time range between dates must be less than 7 days",
            "comment": null,
            "optional": true,
            "optionalDefault": "last 7 days",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "limit",
            "type": "number",
            "subtype": null,
            "description": "Maximum number of returned comments",
            "comment": null,
            "optional": true,
            "optionalDefault": "1000",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model41": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "text",
            "type": "string",
            "subtype": null,
            "description": "Comment text, can not be empty",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Treat comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model42": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "text",
            "type": "string",
            "subtype": null,
            "description": "Comment text, can not be empty",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model43": {
        "name": "Dependency",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Dependency ID",
            "description": null,
            "comment": "Dependency ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "predecessorId",
            "type": "string",
            "subtype": "Task ID",
            "description": "Predecessor task ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "successorId",
            "type": "string",
            "subtype": "Task ID",
            "description": "Successor task ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "relationType",
            "type": "string",
            "subtype": null,
            "description": "Relation between Predecessor and Successor",
            "comment": "Dependency relation type, Enum: StartToStart, StartToFinish, FinishToStart, FinishToFinish",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model44": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "predecessorId",
            "type": "string",
            "subtype": "Task ID",
            "description": "Add predecessor task, only one of predecessorId/successorId fields can be specified",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "successorId",
            "type": "string",
            "subtype": "Task ID",
            "description": "Add successor task, only one of predecessorId/successorId fields can be specified",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "relationType",
            "type": "string",
            "subtype": null,
            "description": "Relation between Predecessor and Successor",
            "comment": "Dependency relation type, Enum: StartToStart, StartToFinish, FinishToStart, FinishToFinish",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model45": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "relationType",
            "type": "string",
            "subtype": null,
            "description": "Relation between Predecessor and Successor",
            "comment": "Dependency relation type, Enum: StartToStart, StartToFinish, FinishToStart, FinishToFinish",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model46": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "createdDate",
            "type": "object",
            "subtype": null,
            "description": "Created date filter, exact match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Last updated date filter, exact match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "trackedDate",
            "type": "object",
            "subtype": null,
            "description": "Tracked date filter, exact match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "me",
            "type": "optional boolean",
            "subtype": null,
            "description": "If present - only timelogs created by current user are returned",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "descendants",
            "type": "optional boolean",
            "subtype": null,
            "description": "Adds all descendant tasks to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "subTasks",
            "type": "optional boolean",
            "subtype": null,
            "description": "Adds subtasks to search scope",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "timelogCategories",
            "type": "array",
            "subtype": "Timelog category ID",
            "description": "Get timelog records for specified categories",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "billingTypes",
            "type": "array",
            "subtype": null,
            "description": "Billing type filter (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "billingType",
                "description": "Timelog billing type (Wrike Resource only)"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model47": {
        "name": "Timelog",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Timelog Entry ID",
            "description": null,
            "comment": "Timelog Entry ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "taskId",
            "type": "string",
            "subtype": "Task ID",
            "description": "Task to which timelog record is tracked",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "userId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "User who tracked the timelog record",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "categoryId",
            "type": "string",
            "subtype": "Timelog category ID",
            "description": "Category of the timelog record",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "billingType",
            "type": "string",
            "subtype": null,
            "description": "Timelog billing type (Wrike Resource only)",
            "comment": "Billing type (Wrike Resource only), Enum: Billable, NonBillable",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Billable",
                "description": "Billable"
              },
              {
                "value": "NonBillable",
                "description": "Non-Billable"
              }
            ],
            "modelRef": null
          },
          {
            "name": "hours",
            "type": "number",
            "subtype": null,
            "description": "Hours tracked in timelog record, must be in [0..24] hours range",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Date of timelog was created",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "string",
            "subtype": null,
            "description": "Date of timelog was updated",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "trackedDate",
            "type": "string",
            "subtype": null,
            "description": "Date for which timelog was recorded",
            "comment": "Format: yyyy-MM-dd",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "comment",
            "type": "string",
            "subtype": null,
            "description": "Timelog record comment",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model48": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "billingType",
                "description": "Timelog billing type (Wrike Resource only)"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model50": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "comment",
            "type": "string",
            "subtype": null,
            "description": "Timelog comment",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hours",
            "type": "number",
            "subtype": null,
            "description": "New timelog tracked hours",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "trackedDate",
            "type": "string",
            "subtype": null,
            "description": "New timelog date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "categoryId",
            "type": "string",
            "subtype": "Timelog category ID",
            "description": "Timelog category",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "billingType",
                "description": "Timelog billing type (Wrike Resource only)"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model49": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "comment",
            "type": "string",
            "subtype": null,
            "description": "Timelog record comment",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hours",
            "type": "number",
            "subtype": null,
            "description": "Time to log in hours",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "trackedDate",
            "type": "string",
            "subtype": null,
            "description": "Date to register time",
            "comment": "Format: yyyy-MM-dd",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "plainText",
            "type": "boolean",
            "subtype": null,
            "description": "Get comment text as plain text, HTML otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "categoryId",
            "type": "string",
            "subtype": "Timelog category ID",
            "description": "Timelog category",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "fields",
            "type": "array",
            "subtype": null,
            "description": "Json string array of optional fields to be included in the response model",
            "comment": "Optional fields, Enum: billingType",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "billingType",
                "description": "Timelog billing type (Wrike Resource only)"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model52": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "versions",
            "type": "optional boolean",
            "subtype": null,
            "description": "Get attachments with previous versions",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "object",
            "subtype": null,
            "description": "Created date filter. Required to request attachments in account. Time range duration should be less than 31 day",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "withUrls",
            "type": "optional boolean",
            "subtype": null,
            "description": "Get attachment URLs. The link for attachment from Wrike is valid for 24 hours from when you make the request",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model53": {
        "name": "Attachment",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Attachment ID",
            "description": null,
            "comment": "Attachment ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "authorId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "ID of user who uploaded the attachment",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Attachment filename",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "createdDate",
            "type": "string",
            "subtype": null,
            "description": "Upload date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "version",
            "type": "number",
            "subtype": null,
            "description": "Attachment version",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Attachment type",
            "comment": "Attachment Type, Enum: Wrike, Google, DropBox, Box, OneDrive, External, DAM",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Wrike",
                "description": "Attachment file content stored in Wrike. When deleted, actual file is removed"
              },
              {
                "value": "Google",
                "description": "Google attachment. Attachment can be accessed only via URL, downloads are not supported by Wrike.When deleted, only stored link is removed"
              },
              {
                "value": "DropBox",
                "description": "DropBox attachment. When deleted, only stored link is removed"
              },
              {
                "value": "Box",
                "description": "Box attachment. Attachment can be accessed only via URL, downloads are not supported by Wrike.When deleted, only stored link is removed"
              },
              {
                "value": "OneDrive",
                "description": "OneDrive attachment. When deleted, only stored link is removed"
              },
              {
                "value": "External",
                "description": "External attachment"
              },
              {
                "value": "DAM",
                "description": "Attachment from an external DAM system"
              }
            ],
            "modelRef": null
          },
          {
            "name": "contentType",
            "type": "string",
            "subtype": null,
            "description": "Content type",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "size",
            "type": "number",
            "subtype": null,
            "description": "Size for Wrike Attachments. For external attachments, size is equal to -1",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "taskId",
            "type": "string",
            "subtype": null,
            "description": "ID of related task. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "folderId",
            "type": "string",
            "subtype": null,
            "description": "ID of related folder. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "commentId",
            "type": "string",
            "subtype": null,
            "description": "ID of related comment",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "currentAttachmentId",
            "type": "string",
            "subtype": "Attachment ID",
            "description": "ID of current attachment version",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "previewUrl",
            "type": "string",
            "subtype": null,
            "description": "Link to download external attachment preview (present if preview is available)",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "url",
            "type": "string",
            "subtype": null,
            "description": "Link to download attachment",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "reviewIds",
            "type": "array",
            "subtype": "Review ID",
            "description": "Review IDs",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "width",
            "type": "number",
            "subtype": null,
            "description": "Attachment width, if image",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "height",
            "type": "number",
            "subtype": null,
            "description": "Attachment height, if image",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model54": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "versions",
            "type": "optional boolean",
            "subtype": null,
            "description": "Get attachments with previous versions",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model57": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "url",
            "type": "string",
            "subtype": null,
            "description": "Download attachment by url",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model58": {
        "name": "APIv3 version",
        "details": null,
        "params": [
          {
            "name": "major",
            "type": "number",
            "subtype": null,
            "description": "Major version number",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "minor",
            "type": "number",
            "subtype": null,
            "description": "Minor version number",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model59": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Entity type",
            "comment": "Entity type, Enum: ApiV2Account, ApiV2User, ApiV2Folder, ApiV2Task, ApiV2Comment, ApiV2Attachment, ApiV2Timelog",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "ApiV2Account",
                "description": "API v2 account"
              },
              {
                "value": "ApiV2User",
                "description": "API v2 user or group"
              },
              {
                "value": "ApiV2Folder",
                "description": "API v2 folder"
              },
              {
                "value": "ApiV2Task",
                "description": "API v2 task"
              },
              {
                "value": "ApiV2Comment",
                "description": "API v2 comment"
              },
              {
                "value": "ApiV2Attachment",
                "description": "API v2 attachment"
              },
              {
                "value": "ApiV2Timelog",
                "description": "API v2 timelog entry"
              }
            ],
            "modelRef": null
          },
          {
            "name": "ids",
            "type": "array",
            "subtype": null,
            "description": "List of APIv2 legacy IDs",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model60": {
        "name": "APIv3/APIv2 ID pair",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": null,
            "description": "API v3 ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "apiV2Id",
            "type": "string",
            "subtype": null,
            "description": "API v2 legacy ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model61": {
        "name": "Colors Info",
        "details": null,
        "params": [
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Color name",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hex",
            "type": "string",
            "subtype": null,
            "description": "HEX code",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model62": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "withArchived",
            "type": "boolean",
            "subtype": null,
            "description": "Include archived spaces",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "userIsMember",
            "type": "boolean",
            "subtype": null,
            "description": "Include only spaces where user is member",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model63": {
        "name": "Space",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Space ID",
            "description": null,
            "comment": "Space ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "avatarUrl",
            "type": "string",
            "subtype": null,
            "description": "Avatar URL",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "accessType",
            "type": "string",
            "subtype": null,
            "description": "Access type",
            "comment": "Space Access Type, Enum: Personal, Private, Public",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "archived",
            "type": "boolean",
            "subtype": null,
            "description": "Archived",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model56": {
        "name": "Attachment Url",
        "details": null,
        "params": [
          {
            "name": "url",
            "type": "string",
            "subtype": null,
            "description": "URL by which attachment can be accessed",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model55": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "size",
            "type": "string",
            "subtype": null,
            "description": "Preview dimensions",
            "comment": "Dimensions of the preview image with limit on width or height, Enum: w44, w100, w200, w300, w400, h400",
            "optional": true,
            "optionalDefault": "w100",
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "w44",
                "description": "Width \u003d 44, height \u003d auto"
              },
              {
                "value": "w100",
                "description": "Width \u003d 100, height \u003d auto"
              },
              {
                "value": "w200",
                "description": "Width \u003d 200, height \u003d auto"
              },
              {
                "value": "w300",
                "description": "Width \u003d 300, height \u003d auto"
              },
              {
                "value": "w400",
                "description": "Width \u003d 400, height \u003d auto"
              },
              {
                "value": "h400",
                "description": "Width \u003d auto, height \u003d 400"
              }
            ],
            "modelRef": null
          }
        ]
      }
    },
    {
      "model51": {
        "name": "Timelog category",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Timelog category ID",
            "description": null,
            "comment": "Timelog category ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name of the timelog record",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "order",
            "type": "number",
            "subtype": null,
            "description": "Order number of the timelog category in category list",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "hidden",
            "type": "boolean",
            "subtype": null,
            "description": "Timelog category is hidden",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model28": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "parent",
            "type": "string",
            "subtype": "Folder ID",
            "description": "ID of parent folder",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title, cannot be empty",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "titlePrefix",
            "type": "string",
            "subtype": null,
            "description": "Title prefix for all copied tasks",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyDescriptions",
            "type": "boolean",
            "subtype": null,
            "description": "Copy descriptions or leave empty",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyResponsibles",
            "type": "boolean",
            "subtype": null,
            "description": "Copy responsibles",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addResponsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Add specified users to task responsible list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeResponsibles",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Remove specified users from task responsible list",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyCustomFields",
            "type": "boolean",
            "subtype": null,
            "description": "Copy custom fields",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyCustomStatuses",
            "type": "boolean",
            "subtype": null,
            "description": "Copy custom statuses or set according to workflow otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyStatuses",
            "type": "boolean",
            "subtype": null,
            "description": "Copy task statuses or set to Active otherwise",
            "comment": null,
            "optional": true,
            "optionalDefault": "true",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "copyParents",
            "type": "boolean",
            "subtype": null,
            "description": "Preserve parent folders",
            "comment": null,
            "optional": true,
            "optionalDefault": "false",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "rescheduleDate",
            "type": "string",
            "subtype": null,
            "description": "Date to use in task rescheduling. Note that only active tasks can be rescheduled. To activate and reschedule all tasks, use \u0027rescheduleDate\u0027 in combination with copyStatuses \u003d false",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "rescheduleMode",
            "type": "string",
            "subtype": null,
            "description": "Mode to be used for rescheduling (based on first or last date), has effect only if reschedule date is specified.",
            "comment": "Task rescheduling mode, Enum: Start, End",
            "optional": true,
            "optionalDefault": "Start",
            "beta": false,
            "enterprise": false,
            "fields": [
              {
                "value": "Start",
                "description": "Tasks in scope are rescheduled starting from reschedule date"
              },
              {
                "value": "End",
                "description": "Tasks in scope are rescheduled ending with reschedule date"
              }
            ],
            "modelRef": null
          },
          {
            "name": "entryLimit",
            "type": "number",
            "subtype": null,
            "description": "Limit maximum allowed number for tasks/folders in tree for copy, operation will fail if limit is exceeded, should be 1..250",
            "comment": null,
            "optional": true,
            "optionalDefault": "250",
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model29": {
        "name": "Async job",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Async job ID",
            "description": null,
            "comment": "Async job ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Job status",
            "comment": "Async job status, Enum: InQueue, InProgress, Completed, Failed",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "progressPercent",
            "type": "number",
            "subtype": null,
            "description": "Progress percents",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "totalCount",
            "type": "number",
            "subtype": null,
            "description": "Total count",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "processedCount",
            "type": "number",
            "subtype": null,
            "description": "Processed count",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Job type",
            "comment": "Async job type, Enum: CopyFolder",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "result",
            "type": "object",
            "subtype": null,
            "description": "Result",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "errorMessage",
            "type": "string",
            "subtype": null,
            "description": "Error message",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model90": {
        "name": "Data Export resource",
        "details": null,
        "params": [
          {
            "name": "name",
            "type": "string",
            "subtype": null,
            "description": "Name of exported resource",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "url",
            "type": "string",
            "subtype": null,
            "description": "Link to a file of exported resource",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model64": {
        "name": "Data Export operation",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Data Export ID",
            "description": null,
            "comment": "Data Export ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "completedDate",
            "type": "string",
            "subtype": null,
            "description": "The date when data export was finished",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "Status",
            "comment": "Enum: Scheduled, InProgress, Completed, Cancelled, Failed",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "resources",
            "type": "array",
            "subtype": null,
            "description": "List of exported resources",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model90"
          }
        ]
      }
    },
    {
      "model65": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "version",
            "type": "string",
            "subtype": null,
            "description": "Version",
            "comment": "Enum: V0, V1",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model91": {
        "name": "Data Export resource foreign key schema",
        "details": null,
        "params": [
          {
            "name": "tableId",
            "type": "string",
            "subtype": null,
            "description": "Foreign table id",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "columnId",
            "type": "string",
            "subtype": null,
            "description": "Foreign column id",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model92": {
        "name": "Data Export resource column schema",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": null,
            "description": "Column id",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "alias",
            "type": "string",
            "subtype": null,
            "description": "Column alias",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dataType",
            "type": "string",
            "subtype": null,
            "description": "Column data type",
            "comment": "Enum: Number, String, Date, Boolean",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "foreignKey",
            "type": "object",
            "subtype": null,
            "description": "Foreign key",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model91"
          }
        ]
      }
    },
    {
      "model66": {
        "name": "Data Export table schema",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": null,
            "description": "Table id",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "alias",
            "type": "string",
            "subtype": null,
            "description": "Table alias",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "columns",
            "type": "array",
            "subtype": null,
            "description": "List of exported columns",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model92"
          }
        ]
      }
    },
    {
      "model67": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "eventDate",
            "type": "object",
            "subtype": null,
            "description": "Event date filter, range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "operations",
            "type": "array",
            "subtype": null,
            "description": "Operations filter",
            "comment": "Audit Log operation, Enum: UserLoggedIn, UserFailLogin, UserLogout, AdminLoggedInAsUser, UserRoleChanged, UserAdminPermissionsChanged, UserGrantAdmin, UserRevokeAdmin, UserDeactivated, UserActivated, UsersAndGroupsExported, InvitationSend, InvitationAccepted, AttachUploaded, AttachDeleted, GroupCreated, GroupMemberAdded, GroupMemberRemoved, GroupRenamed, GroupDeleted, GroupParentAdded, GroupParentRemoved, TaskParentAdded, TaskParentRemoved, TaskShared, TaskUnshared, TaskAssigned, TaskUnassigned, TaskDeleted, TaskErased, TaskCommentChanged, TaskCommentDeleted, RecycleBinErased, TaskStatusChanged, TaskDuplication, UserDeleted, UserRestored, CustomFieldCreated, CustomFieldModified, CustomFieldRemoved, CustomFieldRestored, CustomFieldAddedToFolder, CustomFieldRemovedFromFolder, SecondFactorEnabled, SecondFactorDisabled, SecondFactorUsageReportCreated, AuditReportCreated, AccountBackupCreated, AccountModified, AccountDeleted, Oauth2AccessGranted, Oauth2AccessRevoked, FeedCreated, ExcelExportCreated, UserProfileUpdated, PasswordChanged, PasswordPolicyModified, ApprovedIpRangesOrSubnetsChanged, InvitationPolicyChanged, RequestFormCreated, RequestFormModified, RequestFormDeleted, AccessRoleCreated, AccessRoleModified, AccessRoleDeleted, WorkflowCreated, WorkflowDeleted, WorkflowModified, CalendarExternalLinksDeactivated, CalendarExternalLinksActivated, CalendarExternalLinkCreated, CalendarExternalLinkDeleted, GuestReviewerInvited, GuestReviewerChanged, GuestReviewerRevoked, GuestReviewAccepted, GuestReviewRejected, GuestReviewAccountSettingsChanged, GanttSnapshotCreated, GanttSnapshotDeleted, UserTaskGroupRolesChanged, AccountDataExportRequested, AccountDataExportGenerated, SamlSSOEnabled, SamlSSODisabled, SamlSSOSettingsChanged, SamlSSOMetadataChanged, SamlClearPasswordForSamlUsers, AccessCodeGenerated, AccessCodeAccepted, AccessCodeDeclined, ApprovedDomainsChanged, SpaceCreated, SpaceDeleted, SpaceArchivedUnarchived, UserJoinedSpace, UserLeftSpace",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "pageSize",
            "type": "number",
            "subtype": null,
            "description": "Page size",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "nextPageToken",
            "type": "string",
            "subtype": null,
            "description": "Next page token, overrides any other parameters in request",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model68": {
        "name": "Audit Log",
        "details": null,
        "params": [
          {
            "name": "id",
            "type": "string",
            "subtype": "Audit Log ID",
            "description": null,
            "comment": "Audit Log ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "operation",
            "type": "string",
            "subtype": null,
            "description": "Operation",
            "comment": "Audit Log operation, Enum: UserLoggedIn, UserFailLogin, UserLogout, AdminLoggedInAsUser, UserRoleChanged, UserAdminPermissionsChanged, UserGrantAdmin, UserRevokeAdmin, UserDeactivated, UserActivated, UsersAndGroupsExported, InvitationSend, InvitationAccepted, AttachUploaded, AttachDeleted, GroupCreated, GroupMemberAdded, GroupMemberRemoved, GroupRenamed, GroupDeleted, GroupParentAdded, GroupParentRemoved, TaskParentAdded, TaskParentRemoved, TaskShared, TaskUnshared, TaskAssigned, TaskUnassigned, TaskDeleted, TaskErased, TaskCommentChanged, TaskCommentDeleted, RecycleBinErased, TaskStatusChanged, TaskDuplication, UserDeleted, UserRestored, CustomFieldCreated, CustomFieldModified, CustomFieldRemoved, CustomFieldRestored, CustomFieldAddedToFolder, CustomFieldRemovedFromFolder, SecondFactorEnabled, SecondFactorDisabled, SecondFactorUsageReportCreated, AuditReportCreated, AccountBackupCreated, AccountModified, AccountDeleted, Oauth2AccessGranted, Oauth2AccessRevoked, FeedCreated, ExcelExportCreated, UserProfileUpdated, PasswordChanged, PasswordPolicyModified, ApprovedIpRangesOrSubnetsChanged, InvitationPolicyChanged, RequestFormCreated, RequestFormModified, RequestFormDeleted, AccessRoleCreated, AccessRoleModified, AccessRoleDeleted, WorkflowCreated, WorkflowDeleted, WorkflowModified, CalendarExternalLinksDeactivated, CalendarExternalLinksActivated, CalendarExternalLinkCreated, CalendarExternalLinkDeleted, GuestReviewerInvited, GuestReviewerChanged, GuestReviewerRevoked, GuestReviewAccepted, GuestReviewRejected, GuestReviewAccountSettingsChanged, GanttSnapshotCreated, GanttSnapshotDeleted, UserTaskGroupRolesChanged, AccountDataExportRequested, AccountDataExportGenerated, SamlSSOEnabled, SamlSSODisabled, SamlSSOSettingsChanged, SamlSSOMetadataChanged, SamlClearPasswordForSamlUsers, AccessCodeGenerated, AccessCodeAccepted, AccessCodeDeclined, ApprovedDomainsChanged, SpaceCreated, SpaceDeleted, SpaceArchivedUnarchived, UserJoinedSpace, UserLeftSpace",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "userId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "Operational user ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "userEmail",
            "type": "string",
            "subtype": null,
            "description": "Operational user e-mail",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "eventDate",
            "type": "string",
            "subtype": null,
            "description": "Date and time when operation was performed",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "ipAddress",
            "type": "string",
            "subtype": null,
            "description": "IP address from which an operation was performed",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "objectType",
            "type": "string",
            "subtype": null,
            "description": "Object type",
            "comment": "Audit Log object type, Enum: User, Account, Task, Folder, Project, Comment, Attachment, Invitation, Group, CustomField, Oauth2Client, RequestForm, Workflow, CalendarExternalLink, WorkspaceSnapshot, DataExport, AccessRole",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "objectName",
            "type": "string",
            "subtype": null,
            "description": "Object name",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "objectId",
            "type": "string",
            "subtype": null,
            "description": "Object ID",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "details",
            "type": "object",
            "subtype": null,
            "description": "Operation details",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model93": {
        "name": "Approval decision",
        "details": null,
        "params": [
          {
            "name": "approverId",
            "type": "string",
            "subtype": "Contact ID",
            "description": null,
            "comment": "Contact ID",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "comment",
            "type": "string",
            "subtype": null,
            "description": "comment",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "status",
            "type": "string",
            "subtype": null,
            "description": "status",
            "comment": "Approval decision status, Enum: Pending, Approved, Rejected",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "string",
            "subtype": null,
            "description": "update date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model70": {
        "name": "Approval",
        "details": null,
        "params": [
          {
            "name": "taskId",
            "type": "string",
            "subtype": "Task ID",
            "description": "ID of task. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "folderId",
            "type": "string",
            "subtype": "Folder ID",
            "description": "ID of folder/project. Only one of taskId/folderId fields is present",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "authorId",
            "type": "string",
            "subtype": "Contact ID",
            "description": "ID of user who created approval",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "title",
            "type": "string",
            "subtype": null,
            "description": "Title. Empty by default, set via workflow automation or by user on the portal",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Description",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "string",
            "subtype": null,
            "description": "Update date",
            "comment": "Format: yyyy-MM-dd\u0027T\u0027HH:mm:ss\u0027Z\u0027",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dueDate",
            "type": "string",
            "subtype": null,
            "description": "Due date, if exists",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "decisions",
            "type": "array",
            "subtype": null,
            "description": "Approvers and their decisions",
            "comment": null,
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model93"
          },
          {
            "name": "attachmentIds",
            "type": "array",
            "subtype": "Attachment ID",
            "description": "ID of root attachments in review",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "type",
            "type": "string",
            "subtype": null,
            "description": "Approval type",
            "comment": "Approval type, Enum: Regular, FilesOnly",
            "optional": false,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model69": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "statuses",
            "type": "string",
            "subtype": null,
            "description": "Get approvals for specified statuses",
            "comment": "Approval final status, Enum: Pending, Approved, Rejected, Cancelled, Draft",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "updatedDate",
            "type": "object",
            "subtype": null,
            "description": "Last updated date filter, exact match or range",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": "model81"
          },
          {
            "name": "approvers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Approvers filter, match of any",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "pendingApprovers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Pending approvers filter, match of any",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "limit",
            "type": "number",
            "subtype": null,
            "description": "Limit on number of returned approvals",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "pageSize",
            "type": "number",
            "subtype": null,
            "description": "Page size",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "nextPageToken",
            "type": "string",
            "subtype": null,
            "description": "Next page token, overrides any other parameters in request",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model71": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "Description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dueDate",
            "type": "string",
            "subtype": null,
            "description": "Due date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "approvers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Assign approvers",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "attachments",
            "type": "array",
            "subtype": "Attachment ID",
            "description": "List of root attachments to set in approval",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    },
    {
      "model72": {
        "name": null,
        "details": null,
        "params": [
          {
            "name": "description",
            "type": "string",
            "subtype": null,
            "description": "description",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "dueDate",
            "type": "string",
            "subtype": null,
            "description": "due date",
            "comment": "Format: yyyy-MM-dd",
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addApprovers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Assign approvers",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeApprovers",
            "type": "array",
            "subtype": "Contact ID",
            "description": "Remove approvers",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "addAttachments",
            "type": "array",
            "subtype": "Attachment ID",
            "description": "Add root attachments to approval",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          },
          {
            "name": "removeAttachments",
            "type": "array",
            "subtype": "Attachment ID",
            "description": "Remove root attachments from approval",
            "comment": null,
            "optional": true,
            "optionalDefault": null,
            "beta": false,
            "enterprise": false,
            "fields": null,
            "modelRef": null
          }
        ]
      }
    }
  ]
};
        var examplesJson = [
  {
    "methodId": "POST:/workflows/empty",
    "name": "Create",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/workflows",
    "params": {
      "name": "Test workflow"
    },
    "response": {
      "kind": "workflows",
      "data": [
        {
          "id": "IEAAAAJ6K4AAAAMQ",
          "name": "Test workflow",
          "standard": false,
          "hidden": false,
          "customStatuses": [
            {
              "id": "IEAAAAJ6JMAAAAMQ",
              "name": "Active",
              "standardName": false,
              "color": "Blue",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAMR",
              "name": "Completed",
              "standardName": false,
              "color": "Green",
              "standard": false,
              "group": "Completed",
              "hidden": false
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'name=Test workflow' 'https://www.wrike.com/api/v4/workflows'"
  },
  {
    "methodId": "POST:/folders/single/folders",
    "name": "Create",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/folders",
    "params": {
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]",
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]",
      "description": "Test description",
      "project": "{\"ownerIds\":[\"KUAAAAMU\"],\"status\":\"Red\",\"startDate\":\"2019-11-08\",\"endDate\":\"2019-11-15\"}",
      "title": "Test folder",
      "shareds": "[\"KUAAAAMU\"]"
    },
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCT",
          "accountId": "IEAAAAJ6",
          "title": "Test folder",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:50Z",
          "description": "Test description",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I4AB5CCS"
          ],
          "childIds": [],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000979",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:50Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]&customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]&description=Test description&project={\"ownerIds\":[\"KUAAAAMU\"],\"status\":\"Red\",\"startDate\":\"2019-11-08\",\"endDate\":\"2019-11-15\"}&title=Test folder&shareds=[\"KUAAAAMU\"]' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/folders'"
  },
  {
    "methodId": "POST:/copy_folder/single",
    "name": "Copy",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/copy_folder/IEAAAAJ6I4AB5CCS",
    "params": {
      "parent": "IEAAAAJ6I4AB5CCV",
      "copyParents": "false",
      "entryLimit": "50",
      "copyDescriptions": "true",
      "copyCustomFields": "true",
      "copyCustomStatuses": "true",
      "copyResponsibles": "true",
      "removeResponsibles": "[\"KUAAAAMU\"]",
      "addResponsibles": "[\"KUAAAAMV\"]",
      "rescheduleMode": "Start",
      "rescheduleDate": "2019-11-08",
      "title": "Test folder copy"
    },
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCW",
          "accountId": "IEAAAAJ6",
          "title": "Test folder copy",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:50Z",
          "description": "",
          "sharedIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "parentIds": [
            "IEAAAAJ6I4AB5CCV"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCX",
            "IEAAAAJ6I4AB5CCY"
          ],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000982",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [],
          "customFields": []
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'parent=IEAAAAJ6I4AB5CCV&copyParents=false&entryLimit=50&copyDescriptions=true&copyCustomFields=true&copyCustomStatuses=true&copyResponsibles=true&removeResponsibles=[\"KUAAAAMU\"]&addResponsibles=[\"KUAAAAMV\"]&rescheduleMode=Start&rescheduleDate=2019-11-08&title=Test folder copy' 'https://www.wrike.com/api/v4/copy_folder/IEAAAAJ6I4AB5CCS'"
  },
  {
    "methodId": "POST:/copy_folder_async/single",
    "name": "Copy async",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/copy_folder_async/IEAAAAJ6I4AB5CCS",
    "params": {
      "parent": "IEAAAAJ6I4AB5CCV",
      "copyParents": "false",
      "entryLimit": "50",
      "copyDescriptions": "true",
      "copyCustomFields": "true",
      "copyCustomStatuses": "true",
      "copyResponsibles": "true",
      "removeResponsibles": "[\"KUAAAAMU\"]",
      "addResponsibles": "[\"KUAAAAMV\"]",
      "rescheduleMode": "Start",
      "rescheduleDate": "2019-11-08",
      "title": "Test folder copy"
    },
    "response": {
      "kind": "asyncJob",
      "data": [
        {
          "id": "IEAAAAJ6NJIXI6CUIVTUCYY",
          "status": "InQueue",
          "progressPercent": 0,
          "type": "CopyFolder"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'parent=IEAAAAJ6I4AB5CCV&copyParents=false&entryLimit=50&copyDescriptions=true&copyCustomFields=true&copyCustomStatuses=true&copyResponsibles=true&removeResponsibles=[\"KUAAAAMU\"]&addResponsibles=[\"KUAAAAMV\"]&rescheduleMode=Start&rescheduleDate=2019-11-08&title=Test folder copy' 'https://www.wrike.com/api/v4/copy_folder_async/IEAAAAJ6I4AB5CCS'"
  },
  {
    "methodId": "POST:/folders/single/tasks",
    "name": "Create",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/tasks",
    "params": {
      "superTasks": "[\"IEAAAAJ6KQAB5CC2\"]",
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]",
      "priorityBefore": "IEAAAAJ6KQAB5CCZ",
      "importance": "High",
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]",
      "description": "Test task description",
      "dates": "{\"start\":\"2019-11-08\",\"due\":\"2019-11-15\"}",
      "title": "Test task",
      "follow": "true",
      "followers": "[\"KUAAAAMU\"]",
      "responsibles": "[\"KUAAAAMU\"]",
      "shareds": "[\"KUAAAAMU\"]",
      "parents": "[\"IEAAAAJ6I4AB5CCS\"]",
      "status": "Active"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "Test task description",
          "briefDescription": "Test task description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCT",
            "IEAAAAJ6I4AB5CCU"
          ],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Active",
          "importance": "High",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:51Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-15T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000987",
          "priority": "00001000800000000000a500",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU"
          ],
          "superTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "subTaskIds": [],
          "dependencyIds": [],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'superTasks=[\"IEAAAAJ6KQAB5CC2\"]&metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]&priorityBefore=IEAAAAJ6KQAB5CCZ&importance=High&customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]&description=Test task description&dates={\"start\":\"2019-11-08\",\"due\":\"2019-11-15\"}&title=Test task&follow=true&followers=[\"KUAAAAMU\"]&responsibles=[\"KUAAAAMU\"]&shareds=[\"KUAAAAMU\"]&parents=[\"IEAAAAJ6I4AB5CCS\"]&status=Active' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/tasks'"
  },
  {
    "methodId": "POST:/tasks/single/timelogs",
    "name": "Create",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/timelogs",
    "params": {
      "hours": "10.0",
      "trackedDate": "2019-11-08",
      "comment": "Test timelog"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'hours=10.0&trackedDate=2019-11-08&comment=Test timelog' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/timelogs'"
  },
  {
    "methodId": "POST:/folders/single/comments",
    "name": "In folder",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/comments",
    "params": {
      "plainText": "true",
      "text": "Folder comment"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6E",
          "authorId": "KUAAAAMU",
          "text": "Folder comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS",
          "attachmentIds": []
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'plainText=true&text=Folder comment' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/comments'"
  },
  {
    "methodId": "POST:/tasks/single/comments",
    "name": "In comment",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/comments",
    "params": {
      "plainText": "true",
      "text": "Task comment"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "Task comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "attachmentIds": []
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'plainText=true&text=Task comment' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/comments'"
  },
  {
    "methodId": "POST:/tasks/single/attachments",
    "name": "In task",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/attachments",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLS",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -H 'content-type: application/octet-stream' -H 'X-Requested-With: XMLHttpRequest' -H 'X-File-Name: attachment.txt' --data-binary 'attachment content' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/attachments'"
  },
  {
    "methodId": "POST:/folders/single/attachments",
    "name": "In folder",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/attachments",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLT",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "folderId": "IEAAAAJ6I4AB5CCS"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -H 'content-type: application/octet-stream' -H 'X-Requested-With: XMLHttpRequest' -H 'X-File-Name: attachment.txt' --data-binary 'attachment content' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/attachments'"
  },
  {
    "methodId": "POST:/tasks/single/dependencies",
    "name": "In task",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/dependencies",
    "params": {
      "relationType": "StartToStart",
      "successorId": "IEAAAAJ6KQAB5CCZ"
    },
    "response": {
      "kind": "dependencies",
      "data": [
        {
          "id": "IEAAAAJ6IUAB5CC3KMAB5CCZ",
          "predecessorId": "IEAAAAJ6KQAB5CC3",
          "successorId": "IEAAAAJ6KQAB5CCZ",
          "relationType": "StartToStart"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'relationType=StartToStart&successorId=IEAAAAJ6KQAB5CCZ' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/dependencies'"
  },
  {
    "methodId": "POST:/invitations/empty",
    "name": "In account",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/invitations",
    "params": {
      "firstName": "First name",
      "lastName": "Last name",
      "external": "true",
      "role": "User",
      "email": "0shtquzqre@jakkymlzu8.com"
    },
    "response": {
      "kind": "invitations",
      "data": [
        {
          "id": "IEAAAAJ6JEAAAAM4",
          "accountId": "IEAAAAJ6",
          "firstName": "First name",
          "lastName": "Last name",
          "email": "0shtquzqre@jakkymlzu8.com",
          "status": "Pending",
          "inviterUserId": "KUAAAAMU",
          "invitationDate": "2019-11-08T09:57:52Z",
          "role": "User",
          "external": true
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'firstName=First name&lastName=Last name&external=true&role=User&email=0shtquzqre@jakkymlzu8.com' 'https://www.wrike.com/api/v4/invitations'"
  },
  {
    "methodId": "POST:/groups/empty",
    "name": "In account",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/groups",
    "params": {
      "parent": "KX77775K",
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]",
      "members": "[\"KUAAAAMV\",\"KUAAAAMU\"]",
      "avatar": "{\"letters\":\"TG\",\"color\":\"#aa3df6\"}",
      "title": "Test group"
    },
    "response": {
      "kind": "groups",
      "data": [
        {
          "id": "KX77775J",
          "accountId": "IEAAAAJ6",
          "title": "Test group",
          "memberIds": [
            "KUAAAAMV",
            "KUAAAAMU"
          ],
          "childIds": [],
          "parentIds": [
            "KX77775K"
          ],
          "avatarUrl": "/EE/3F/Circle_ffaa3df6_84-71_v1.png",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'parent=KX77775K&metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]&members=[\"KUAAAAMV\",\"KUAAAAMU\"]&avatar={\"letters\":\"TG\",\"color\":\"#aa3df6\"}&title=Test group' 'https://www.wrike.com/api/v4/groups'"
  },
  {
    "methodId": "POST:/customfields/empty",
    "name": "In account",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/customfields",
    "params": {
      "title": "Test custom field",
      "type": "Text",
      "shareds": "[\"KUAAAAMU\"]"
    },
    "response": {
      "kind": "customfields",
      "data": [
        {
          "id": "IEAAAAJ6JUAAAAIF",
          "accountId": "IEAAAAJ6",
          "title": "Test custom field",
          "type": "Text",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "settings": {
            "inheritanceType": "All"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'title=Test custom field&type=Text&shareds=[\"KUAAAAMU\"]' 'https://www.wrike.com/api/v4/customfields'"
  },
  {
    "methodId": "POST:/tasks/single/approvals",
    "name": "In task",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/approvals",
    "params": {
      "attachments": "[\"IEAAAAJ6IYAB5BLS\"]",
      "dueDate": "2019-11-08",
      "description": "Test description",
      "approvers": "[\"KUAAAAMV\",\"KUAAAAMU\"]"
    },
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:53Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMV",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            },
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLS"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Pending"
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'attachments=[\"IEAAAAJ6IYAB5BLS\"]&dueDate=2019-11-08&description=Test description&approvers=[\"KUAAAAMV\",\"KUAAAAMU\"]' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/approvals'"
  },
  {
    "methodId": "PUT:/account/empty",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/account",
    "params": {
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]"
    },
    "response": {
      "kind": "accounts",
      "data": [
        {
          "id": "IEAAAAJ6",
          "name": "Test User’s Team",
          "dateFormat": "MM/dd/yyyy",
          "firstDayOfWeek": "Sun",
          "workDays": [
            "Mon",
            "Tue",
            "Wed"
          ],
          "rootFolderId": "IEAAAAJ6I7777777",
          "recycleBinId": "IEAAAAJ6I7777776",
          "createdDate": "2019-11-08T09:57:46Z",
          "subscription": {
            "type": "Enterprise",
            "suspended": false,
            "paid": false,
            "userLimit": 100
          },
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "joinedDate": "2019-11-08T09:57:46Z"
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]' 'https://www.wrike.com/api/v4/account'"
  },
  {
    "methodId": "PUT:/workflows/single",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/workflows/IEAAAAJ6K4AAAAMQ",
    "params": {
      "hidden": "false",
      "customStatus": "{\"name\":\"In design\",\"color\":\"Green\",\"group\":\"Active\"}",
      "name": "New workflow"
    },
    "response": {
      "kind": "workflows",
      "data": [
        {
          "id": "IEAAAAJ6K4AAAAMQ",
          "name": "New workflow",
          "standard": false,
          "hidden": false,
          "customStatuses": [
            {
              "id": "IEAAAAJ6JMAAAAMQ",
              "name": "Active",
              "standardName": false,
              "color": "Blue",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAM2",
              "name": "In design",
              "standardName": false,
              "color": "Green",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAMR",
              "name": "Completed",
              "standardName": false,
              "color": "Green",
              "standard": false,
              "group": "Completed",
              "hidden": false
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'hidden=false&customStatus={\"name\":\"In design\",\"color\":\"Green\",\"group\":\"Active\"}&name=New workflow' 'https://www.wrike.com/api/v4/workflows/IEAAAAJ6K4AAAAMQ'"
  },
  {
    "methodId": "PUT:/contacts/single",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/contacts/KUAAAAMU",
    "params": {
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]"
    },
    "response": {
      "kind": "contacts",
      "data": [
        {
          "id": "KUAAAAMU",
          "firstName": "Test",
          "lastName": "User",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": true
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//D7/A2/Box_ffffff00_84-84_v1.png",
          "timezone": "Europe/Moscow",
          "locale": "en",
          "deleted": false,
          "me": true,
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]' 'https://www.wrike.com/api/v4/contacts/KUAAAAMU'"
  },
  {
    "methodId": "PUT:/folders/single",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS",
    "params": {
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]",
      "addShareds": "[\"KUAAAAMU\"]",
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]",
      "description": "New description",
      "project": "{\"ownersAdd\":[\"KUAAAAMU\"],\"ownersRemove\":[\"KUAAAAMV\"],\"status\":\"Red\",\"startDate\":\"2019-11-08\",\"endDate\":\"2019-11-15\"}",
      "addParents": "[\"IEAAAAJ6I7777777\"]",
      "title": "New title"
    },
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "description": "New description",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I7777777"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCT",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": true,
          "permalink": "https://www.wrike.com/open.htm?id=2000978",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]&addShareds=[\"KUAAAAMU\"]&customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"}]&description=New description&project={\"ownersAdd\":[\"KUAAAAMU\"],\"ownersRemove\":[\"KUAAAAMV\"],\"status\":\"Red\",\"startDate\":\"2019-11-08\",\"endDate\":\"2019-11-15\"}&addParents=[\"IEAAAAJ6I7777777\"]&title=New title' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS'"
  },
  {
    "methodId": "PUT:/folders/multi",
    "name": "Modify Folders",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS,IEAAAAJ6I4AB5CCT",
    "params": {
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]"
    },
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "description": "New description",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I7777777"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCT",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": true,
          "permalink": "https://www.wrike.com/open.htm?id=2000978",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        },
        {
          "id": "IEAAAAJ6I4AB5CCT",
          "accountId": "IEAAAAJ6",
          "title": "Test folder",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "description": "Test description",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I4AB5CCS"
          ],
          "childIds": [],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000979",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:50Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS,IEAAAAJ6I4AB5CCT'"
  },
  {
    "methodId": "PUT:/tasks/single",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3",
    "params": {
      "removeSuperTasks": "[\"IEAAAAJ6KQAB5CCZ\"]",
      "priorityAfter": "IEAAAAJ6KQAB5CCZ",
      "importance": "Low",
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]",
      "description": "New description",
      "addResponsibles": "[\"KUAAAAMU\"]",
      "dates": "{\"start\":\"2019-11-08\",\"due\":\"2019-11-11\"}",
      "addFollowers": "[\"KUAAAAMU\"]",
      "addParents": "[\"IEAAAAJ6I4AB5CCT\"]",
      "title": "New title",
      "status": "Deferred"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "description": "New description",
          "briefDescription": "New description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS",
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCU"
          ],
          "sharedIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Deferred",
          "importance": "Low",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "dates": {
            "type": "Planned",
            "duration": 960,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAC",
          "hasAttachments": true,
          "attachmentCount": 1,
          "permalink": "https://www.wrike.com/open.htm?id=2000987",
          "priority": "00001000800000000000a200",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "superTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "subTaskIds": [],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'removeSuperTasks=[\"IEAAAAJ6KQAB5CCZ\"]&priorityAfter=IEAAAAJ6KQAB5CCZ&importance=Low&customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]&description=New description&addResponsibles=[\"KUAAAAMU\"]&dates={\"start\":\"2019-11-08\",\"due\":\"2019-11-11\"}&addFollowers=[\"KUAAAAMU\"]&addParents=[\"IEAAAAJ6I4AB5CCT\"]&title=New title&status=Deferred' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3'"
  },
  {
    "methodId": "PUT:/tasks/multi",
    "name": "Modify Tasks",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3,IEAAAAJ6KQAB5CCZ",
    "params": {
      "customFields": "[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "description": "New description",
          "briefDescription": "New description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS",
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCU"
          ],
          "sharedIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Deferred",
          "importance": "Low",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "dates": {
            "type": "Planned",
            "duration": 960,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAC",
          "hasAttachments": true,
          "attachmentCount": 1,
          "permalink": "https://www.wrike.com/open.htm?id=2000987",
          "priority": "00001000800000000000a200",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "superTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "subTaskIds": [],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        },
        {
          "id": "IEAAAAJ6KQAB5CCZ",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "",
          "briefDescription": "",
          "parentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [],
          "status": "Active",
          "importance": "Normal",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-15T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000985",
          "priority": "00001000800000000000a400",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU"
          ],
          "superTaskIds": [],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2",
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'customFields=[{\"id\":\"IEAAAAJ6JUAAAAID\",\"value\":\"testValue\"},{\"id\":\"IEAAAAJ6JUAAAAIE\",\"value\":\"testValue\"}]' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3,IEAAAAJ6KQAB5CCZ'"
  },
  {
    "methodId": "PUT:/timelogs/single",
    "name": "Modify",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/timelogs/IEAAAAJ6JQAAAAAN",
    "params": {
      "hours": "11.0",
      "trackedDate": "2019-11-08",
      "comment": "New timelog comment"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'hours=11.0&trackedDate=2019-11-08&comment=New timelog comment' 'https://www.wrike.com/api/v4/timelogs/IEAAAAJ6JQAAAAAN'"
  },
  {
    "methodId": "PUT:/comments/single",
    "name": "In folder",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/comments/IEAAAAJ6IMAAAA6E",
    "params": {
      "plainText": "true",
      "text": "New folder comment text"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6E",
          "authorId": "KUAAAAMU",
          "text": "New folder comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS",
          "attachmentIds": []
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'plainText=true&text=New folder comment text' 'https://www.wrike.com/api/v4/comments/IEAAAAJ6IMAAAA6E'"
  },
  {
    "methodId": "PUT:/comments/single",
    "name": "In task",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/comments/IEAAAAJ6IMAAAA6F",
    "params": {
      "plainText": "true",
      "text": "New task comment text"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "New task comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "attachmentIds": []
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'plainText=true&text=New task comment text' 'https://www.wrike.com/api/v4/comments/IEAAAAJ6IMAAAA6F'"
  },
  {
    "methodId": "PUT:/attachments/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLU",
          "authorId": "KUAAAAMU",
          "name": "new_attachment.txt",
          "createdDate": "2019-11-08T09:57:53Z",
          "version": 2,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 22,
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -H 'content-type: application/octet-stream' -H 'X-Requested-With: XMLHttpRequest' -H 'X-File-Name: new_attachment.txt' --data-binary 'new attachment content' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS'"
  },
  {
    "methodId": "PUT:/dependencies/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ",
    "params": {
      "relationType": "FinishToFinish"
    },
    "response": {
      "kind": "dependencies",
      "data": [
        {
          "id": "IEAAAAJ6IUAB5CC3KMAB5CCZ",
          "predecessorId": "IEAAAAJ6KQAB5CC3",
          "successorId": "IEAAAAJ6KQAB5CCZ",
          "relationType": "FinishToFinish"
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'relationType=FinishToFinish' 'https://www.wrike.com/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ'"
  },
  {
    "methodId": "PUT:/invitations/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/invitations/IEAAAAJ6JEAAAAM4",
    "params": {
      "external": "true",
      "role": "Collaborator",
      "resend": "true"
    },
    "response": {
      "kind": "invitations",
      "data": [
        {
          "id": "IEAAAAJ6JEAAAAM4",
          "accountId": "IEAAAAJ6",
          "firstName": "First name",
          "lastName": "Last name",
          "email": "0shtquzqre@jakkymlzu8.com",
          "status": "Pending",
          "inviterUserId": "KUAAAAMU",
          "invitationDate": "2019-11-08T09:57:52Z",
          "role": "Collaborator",
          "external": true
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'external=true&role=Collaborator&resend=true' 'https://www.wrike.com/api/v4/invitations/IEAAAAJ6JEAAAAM4'"
  },
  {
    "methodId": "PUT:/users/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/users/KUAAAAMV",
    "params": {
      "profile": "{\"accountId\":\"IEAAAAJ6\",\"role\":\"Collaborator\",\"external\":true}"
    },
    "response": {
      "kind": "users",
      "data": [
        {
          "id": "KUAAAAMV",
          "firstName": "full",
          "lastName": "name",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "Collaborator",
              "external": true,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//A0/1E/Box_ff43a047_70-78_v1.png",
          "timezone": "US/Pacific",
          "locale": "en",
          "deleted": false,
          "metadata": []
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'profile={\"accountId\":\"IEAAAAJ6\",\"role\":\"Collaborator\",\"external\":true}' 'https://www.wrike.com/api/v4/users/KUAAAAMV'"
  },
  {
    "methodId": "PUT:/groups/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/groups/KX77775J",
    "params": {
      "parent": "KX77775K",
      "metadata": "[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]",
      "addMembers": "[\"KUAAAAMU\"]",
      "removeMembers": "[\"KUAAAAMV\"]",
      "avatar": "{\"letters\":\"NG\",\"color\":\"#73a419\"}",
      "title": "New test group"
    },
    "response": {
      "kind": "groups",
      "data": [
        {
          "id": "KX77775J",
          "accountId": "IEAAAAJ6",
          "title": "New test group",
          "memberIds": [
            "KUAAAAMU"
          ],
          "childIds": [
            "KX77775I"
          ],
          "parentIds": [
            "KX77775K"
          ],
          "avatarUrl": "/82/5B/Circle_ff73a419_78-71_v1.png",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'parent=KX77775K&metadata=[{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}]&addMembers=[\"KUAAAAMU\"]&removeMembers=[\"KUAAAAMV\"]&avatar={\"letters\":\"NG\",\"color\":\"#73a419\"}&title=New test group' 'https://www.wrike.com/api/v4/groups/KX77775J'"
  },
  {
    "methodId": "PUT:/customfields/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/customfields/IEAAAAJ6JUAAAAIF",
    "params": {
      "addShareds": "[\"KUAAAAMU\"]",
      "removeShareds": "[\"KUAAAAMV\"]",
      "title": "New test custom field",
      "type": "Numeric"
    },
    "response": {
      "kind": "customfields",
      "data": [
        {
          "id": "IEAAAAJ6JUAAAAIF",
          "accountId": "IEAAAAJ6",
          "title": "New test custom field",
          "type": "Numeric",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "settings": {
            "inheritanceType": "All",
            "decimalPlaces": 2,
            "useThousandsSeparator": false,
            "aggregation": "Sum"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'addShareds=[\"KUAAAAMU\"]&removeShareds=[\"KUAAAAMV\"]&title=New test custom field&type=Numeric' 'https://www.wrike.com/api/v4/customfields/IEAAAAJ6JUAAAAIF'"
  },
  {
    "methodId": "PUT:/approvals/single",
    "name": "By ID",
    "httpMethod": "PUT",
    "requestUrl": "/api/v4/approvals/IEAAAAJ6MEAAAAAN",
    "params": {
      "addApprovers": "[\"KUAAAAMU\"]",
      "addAttachments": "[\"IEAAAAJ6IYAB5BLV\"]",
      "dueDate": "2019-11-08",
      "removeApprovers": "[\"KUAAAAMV\"]",
      "removeAttachments": "[\"IEAAAAJ6IYAB5BLS\"]"
    },
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLV"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Pending"
        }
      ]
    },
    "curlCommand": "curl -g -X PUT -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' -d 'addApprovers=[\"KUAAAAMU\"]&addAttachments=[\"IEAAAAJ6IYAB5BLV\"]&dueDate=2019-11-08&removeApprovers=[\"KUAAAAMV\"]&removeAttachments=[\"IEAAAAJ6IYAB5BLS\"]' 'https://www.wrike.com/api/v4/approvals/IEAAAAJ6MEAAAAAN'"
  },
  {
    "methodId": "GET:/account/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/account",
    "params": {
      "fields": "[\"subscription\",\"customFields\",\"metadata\"]"
    },
    "response": {
      "kind": "accounts",
      "data": [
        {
          "id": "IEAAAAJ6",
          "name": "Test User’s Team",
          "dateFormat": "MM/dd/yyyy",
          "firstDayOfWeek": "Sun",
          "workDays": [
            "Mon",
            "Tue",
            "Wed"
          ],
          "rootFolderId": "IEAAAAJ6I7777777",
          "recycleBinId": "IEAAAAJ6I7777776",
          "createdDate": "2019-11-08T09:57:46Z",
          "subscription": {
            "type": "Enterprise",
            "suspended": false,
            "paid": false,
            "userLimit": 100
          },
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "accountId": "IEAAAAJ6",
              "title": "test 1",
              "type": "Text",
              "sharedIds": [],
              "settings": {
                "inheritanceType": "All"
              }
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "accountId": "IEAAAAJ6",
              "title": "test 2",
              "type": "Text",
              "sharedIds": [],
              "settings": {
                "inheritanceType": "All"
              }
            },
            {
              "id": "IEAAAAJ6JUAAAAIF",
              "accountId": "IEAAAAJ6",
              "title": "New test custom field",
              "type": "Numeric",
              "sharedIds": [
                "KUAAAAMU"
              ],
              "settings": {
                "inheritanceType": "All",
                "decimalPlaces": 2,
                "useThousandsSeparator": false,
                "aggregation": "Sum"
              }
            }
          ],
          "joinedDate": "2019-11-08T09:57:46Z"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/account?fields=[\"subscription\",\"customFields\",\"metadata\"]'"
  },
  {
    "methodId": "GET:/workflows/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/workflows",
    "params": {},
    "response": {
      "kind": "workflows",
      "data": [
        {
          "id": "IEAAAAJ6K77777WC",
          "name": "Default Workflow",
          "standard": true,
          "hidden": false,
          "customStatuses": [
            {
              "id": "IEAAAAJ6JMAAAAAA",
              "name": "New",
              "standardName": true,
              "color": "Blue",
              "standard": true,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAMG",
              "name": "In Progress",
              "standardName": true,
              "color": "Turquoise",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAAB",
              "name": "Completed",
              "standardName": true,
              "color": "Green",
              "standard": true,
              "group": "Completed",
              "hidden": false
            }
          ]
        },
        {
          "id": "IEAAAAJ6K4AAAAMQ",
          "name": "New workflow",
          "standard": false,
          "hidden": false,
          "customStatuses": [
            {
              "id": "IEAAAAJ6JMAAAAMQ",
              "name": "Active",
              "standardName": false,
              "color": "Blue",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAM2",
              "name": "In design",
              "standardName": false,
              "color": "Green",
              "standard": false,
              "group": "Active",
              "hidden": false
            },
            {
              "id": "IEAAAAJ6JMAAAAMR",
              "name": "Completed",
              "standardName": false,
              "color": "Green",
              "standard": false,
              "group": "Completed",
              "hidden": false
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/workflows'"
  },
  {
    "methodId": "GET:/contacts/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/contacts",
    "params": {
      "metadata": "{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}",
      "fields": "[\"metadata\"]"
    },
    "response": {
      "kind": "contacts",
      "data": [
        {
          "id": "KX77775J",
          "firstName": "New test group",
          "lastName": "",
          "type": "Group",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//82/5B/Circle_ff73a419_78-71_v1.png",
          "timezone": "Z",
          "locale": "en",
          "deleted": false,
          "memberIds": [
            "KUAAAAMU"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        },
        {
          "id": "KUAAAAMU",
          "firstName": "Test",
          "lastName": "User",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": true
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//D7/A2/Box_ffffff00_84-84_v1.png",
          "timezone": "Europe/Moscow",
          "locale": "en",
          "deleted": false,
          "me": true,
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/contacts?metadata={\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}&fields=[\"metadata\"]'"
  },
  {
    "methodId": "GET:/contacts/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/contacts/KUAAAAMV,KUAAAAMU",
    "params": {
      "fields": "[\"metadata\"]"
    },
    "response": {
      "kind": "contacts",
      "data": [
        {
          "id": "KUAAAAMU",
          "firstName": "Test",
          "lastName": "User",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": true
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//D7/A2/Box_ffffff00_84-84_v1.png",
          "timezone": "Europe/Moscow",
          "locale": "en",
          "deleted": false,
          "me": true,
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        },
        {
          "id": "KUAAAAMV",
          "firstName": "full",
          "lastName": "name",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "Collaborator",
              "external": true,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//A0/1E/Box_ff43a047_70-78_v1.png",
          "timezone": "US/Pacific",
          "locale": "en",
          "deleted": false,
          "metadata": []
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/contacts/KUAAAAMV,KUAAAAMU?fields=[\"metadata\"]'"
  },
  {
    "methodId": "GET:/contacts/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/contacts",
    "params": {
      "fields": "[\"metadata\"]"
    },
    "response": {
      "kind": "contacts",
      "data": [
        {
          "id": "KX77775L",
          "firstName": "My Team",
          "lastName": "",
          "type": "Group",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars/default/internal_users_group.png",
          "timezone": "Z",
          "locale": "en",
          "deleted": false,
          "memberIds": [
            "KUAAAAMU"
          ],
          "metadata": [],
          "myTeam": true
        },
        {
          "id": "KX77775J",
          "firstName": "New test group",
          "lastName": "",
          "type": "Group",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//82/5B/Circle_ff73a419_78-71_v1.png",
          "timezone": "Z",
          "locale": "en",
          "deleted": false,
          "memberIds": [
            "KUAAAAMU"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ]
        },
        {
          "id": "KX77775I",
          "firstName": "Test child group",
          "lastName": "",
          "type": "Group",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": false
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//97/20/Circle_ffce93d8_84-67_v1.png",
          "timezone": "Z",
          "locale": "en",
          "deleted": false,
          "memberIds": [],
          "metadata": []
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/contacts?fields=[\"metadata\"]'"
  },
  {
    "methodId": "GET:/folders/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders",
    "params": {},
    "response": {
      "kind": "folderTree",
      "data": [
        {
          "id": "IEAAAAJ6I7777777",
          "title": "Root",
          "children": [
            "IEAAAAJ6I4AB5CC4",
            "IEAAAAJ6I4AB5CC5",
            "IEAAAAJ6I4AB5CCV"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CC4",
            "IEAAAAJ6I4AB5CC5",
            "IEAAAAJ6I4AB5CCV"
          ],
          "scope": "WsRoot"
        },
        {
          "id": "IEAAAAJ6I7777776",
          "title": "Recycle Bin",
          "children": [],
          "childIds": [],
          "scope": "RbRoot"
        },
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "title": "New title",
          "children": [
            "IEAAAAJ6I4AB5CCU",
            "IEAAAAJ6I4AB5CCT"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCU",
            "IEAAAAJ6I4AB5CCT"
          ],
          "scope": "WsFolder",
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders'"
  },
  {
    "methodId": "GET:/folders/single/folders",
    "name": "In folders",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/folders",
    "params": {},
    "response": {
      "kind": "folderTree",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "title": "New title",
          "children": [
            "IEAAAAJ6I4AB5CCU",
            "IEAAAAJ6I4AB5CCT"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCU",
            "IEAAAAJ6I4AB5CCT"
          ],
          "scope": "WsFolder",
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        },
        {
          "id": "IEAAAAJ6I4AB5CCU",
          "title": "Test folder",
          "children": [],
          "childIds": [],
          "scope": "WsFolder"
        },
        {
          "id": "IEAAAAJ6I4AB5CCT",
          "title": "Test folder",
          "children": [],
          "childIds": [],
          "scope": "WsFolder",
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:50Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/folders'"
  },
  {
    "methodId": "GET:/spaces/single/folders",
    "name": "In spaces",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/spaces/IEAAAAJ6I4AB5CC4/folders",
    "params": {},
    "response": {
      "kind": "folderTree",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CC4",
          "title": "Public",
          "children": [
            "IEAAAAJ6I4AB5CC7"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CC7"
          ],
          "scope": "WsFolder"
        },
        {
          "id": "IEAAAAJ6I4AB5CC7",
          "title": "Test folder",
          "children": [],
          "childIds": [],
          "scope": "WsFolder"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/spaces/IEAAAAJ6I4AB5CC4/folders'"
  },
  {
    "methodId": "GET:/folders/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCT,IEAAAAJ6I4AB5CCS",
    "params": {
      "fields": "[\"childIds\",\"briefDescription\",\"color\"]"
    },
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCT",
          "accountId": "IEAAAAJ6",
          "title": "Test folder",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "briefDescription": "Test description",
          "description": "Test description",
          "color": "None",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I4AB5CCS"
          ],
          "childIds": [],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000979",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:50Z"
          }
        },
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:53Z",
          "briefDescription": "New description",
          "description": "New description",
          "color": "None",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I7777777"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCT",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [],
          "scope": "WsFolder",
          "hasAttachments": true,
          "permalink": "https://www.wrike.com/open.htm?id=2000978",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCT,IEAAAAJ6I4AB5CCS?fields=[\"childIds\",\"briefDescription\",\"color\"]'"
  },
  {
    "methodId": "GET:/tasks/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks",
    "params": {
      "metadata": "{\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}",
      "createdDate": "{\"start\":\"2019-11-07T09:57:54Z\"}",
      "dueDate": "{\"start\":\"2019-10-08\"}",
      "sortOrder": "Desc",
      "sortField": "CreatedDate",
      "scheduledDate": "{\"start\":\"2019-10-08\",\"end\":\"2019-12-08\"}",
      "updatedDate": "{\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}",
      "fields": "[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]",
      "descendants": "true",
      "startDate": "{\"end\":\"2019-12-08T12:57:54\"}",
      "status": "Active"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC2",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "Test task description",
          "briefDescription": "Test task description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Active",
          "importance": "High",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-04T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000986",
          "priority": "00001000800000000000a600",
          "superTaskIds": [
            "IEAAAAJ6KQAB5CCZ"
          ],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC3"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        },
        {
          "id": "IEAAAAJ6KQAB5CCZ",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "",
          "briefDescription": "",
          "parentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [],
          "status": "Active",
          "importance": "Normal",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-04T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000985",
          "priority": "00001000800000000000a400",
          "superTaskIds": [],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2",
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks?metadata={\"key\":\"testMetaKey\",\"value\":\"testMetaValue\"}&createdDate={\"start\":\"2019-11-07T09:57:54Z\"}&dueDate={\"start\":\"2019-10-08\"}&sortOrder=Desc&sortField=CreatedDate&scheduledDate={\"start\":\"2019-10-08\",\"end\":\"2019-12-08\"}&updatedDate={\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}&fields=[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]&descendants=true&startDate={\"end\":\"2019-12-08T12:57:54\"}&status=Active'"
  },
  {
    "methodId": "GET:/folders/single/tasks",
    "name": "In folder",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/tasks",
    "params": {
      "createdDate": "{\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}",
      "dueDate": "{\"end\":\"2019-12-08\"}",
      "sortField": "CreatedDate",
      "scheduledDate": "{\"equal\":\"2019-11-08\"}",
      "updatedDate": "{\"end\":\"2019-11-09T09:57:54Z\"}",
      "fields": "[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]",
      "descendants": "true",
      "startDate": "{\"start\":\"2019-10-08\",\"end\":\"2019-12-08\"}",
      "status": "Active"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CCZ",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "",
          "briefDescription": "",
          "parentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [],
          "status": "Active",
          "importance": "Normal",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-04T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000985",
          "priority": "00001000800000000000a400",
          "superTaskIds": [],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2",
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ]
        },
        {
          "id": "IEAAAAJ6KQAB5CC2",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "Test task description",
          "briefDescription": "Test task description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Active",
          "importance": "High",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-04T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000986",
          "priority": "00001000800000000000a600",
          "superTaskIds": [
            "IEAAAAJ6KQAB5CCZ"
          ],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC3"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/tasks?createdDate={\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}&dueDate={\"end\":\"2019-12-08\"}&sortField=CreatedDate&scheduledDate={\"equal\":\"2019-11-08\"}&updatedDate={\"end\":\"2019-11-09T09:57:54Z\"}&fields=[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]&descendants=true&startDate={\"start\":\"2019-10-08\",\"end\":\"2019-12-08\"}&status=Active'"
  },
  {
    "methodId": "GET:/spaces/single/tasks",
    "name": "In space",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/spaces/IEAAAAJ6I4AB5CC4/tasks",
    "params": {
      "sortField": "CreatedDate",
      "fields": "[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]",
      "descendants": "true",
      "status": "Active"
    },
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC6",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "",
          "briefDescription": "",
          "parentIds": [
            "IEAAAAJ6I4AB5CC4"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU",
            "KX77775L"
          ],
          "responsibleIds": [],
          "status": "Active",
          "importance": "Normal",
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "dates": {
            "type": "Backlog"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "attachmentCount": 0,
          "permalink": "https://www.wrike.com/open.htm?id=2000990",
          "priority": "00001000800000000000b800",
          "superTaskIds": [],
          "subTaskIds": [],
          "dependencyIds": [],
          "metadata": [],
          "customFields": []
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/spaces/IEAAAAJ6I4AB5CC4/tasks?sortField=CreatedDate&fields=[\"authorIds\",\"superTaskIds\",\"customFields\",\"parentIds\",\"briefDescription\",\"recurrent\",\"hasAttachments\",\"subTaskIds\",\"description\",\"dependencyIds\",\"attachmentCount\",\"responsibleIds\",\"metadata\",\"sharedIds\",\"superParentIds\"]&descendants=true&status=Active'"
  },
  {
    "methodId": "GET:/tasks/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3,IEAAAAJ6KQAB5CCZ",
    "params": {},
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "description": "New description",
          "briefDescription": "New description",
          "parentIds": [
            "IEAAAAJ6I4AB5CCS",
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [
            "IEAAAAJ6I4AB5CCU"
          ],
          "sharedIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Deferred",
          "importance": "Low",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 960,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAC",
          "hasAttachments": true,
          "permalink": "https://www.wrike.com/open.htm?id=2000987",
          "priority": "00001000800000000000a200",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "superTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "subTaskIds": [],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        },
        {
          "id": "IEAAAAJ6KQAB5CCZ",
          "accountId": "IEAAAAJ6",
          "title": "Test task",
          "description": "",
          "briefDescription": "",
          "parentIds": [
            "IEAAAAJ6I4AB5CCT"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU"
          ],
          "responsibleIds": [],
          "status": "Active",
          "importance": "Normal",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dates": {
            "type": "Planned",
            "duration": 2880,
            "start": "2019-11-04T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "WsTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAA",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000985",
          "priority": "00001000800000000000a400",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU"
          ],
          "superTaskIds": [],
          "subTaskIds": [
            "IEAAAAJ6KQAB5CC2"
          ],
          "dependencyIds": [
            "IEAAAAJ6IUAB5CCZKMAB5CC2",
            "IEAAAAJ6IUAB5CC3KMAB5CCZ"
          ],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3,IEAAAAJ6KQAB5CCZ'"
  },
  {
    "methodId": "GET:/spaces/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/spaces",
    "params": {
      "withArchived": "false"
    },
    "response": {
      "kind": "spaces",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CC4",
          "title": "Public",
          "avatarUrl": "https://storage.www.wrike.com/avatars/00/10/spaceicon_Circle_ffe8e8e8_80_v1.png",
          "accessType": "Public",
          "archived": false
        },
        {
          "id": "IEAAAAJ6I4AB5CC5",
          "title": "Personal",
          "avatarUrl": "https://www.wrike.com/static/spaceicons/1/1-1f3e0.png",
          "accessType": "Personal",
          "archived": false
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/spaces?withArchived=false'"
  },
  {
    "methodId": "GET:/timelogs/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/timelogs",
    "params": {
      "createdDate": "{\"start\":\"2019-11-07T09:57:54Z\"}",
      "trackedDate": "{\"equal\":\"2019-11-08\"}"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        },
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelogs?createdDate={\"start\":\"2019-11-07T09:57:54Z\"}&trackedDate={\"equal\":\"2019-11-08\"}'"
  },
  {
    "methodId": "GET:/timelogs/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/timelogs/IEAAAAJ6JQAAAAAN,IEAAAAJ6JQAAAAAO",
    "params": {},
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        },
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelogs/IEAAAAJ6JQAAAAAN,IEAAAAJ6JQAAAAAO'"
  },
  {
    "methodId": "GET:/timelogs/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/timelogs",
    "params": {
      "createdDate": "{\"end\":\"2019-11-09T09:57:54Z\"}",
      "trackedDate": "{\"start\":\"2019-11-07T12:57:54\",\"end\":\"2019-11-09T12:57:54\"}"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        },
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelogs?createdDate={\"end\":\"2019-11-09T09:57:54Z\"}&trackedDate={\"start\":\"2019-11-07T12:57:54\",\"end\":\"2019-11-09T12:57:54\"}'"
  },
  {
    "methodId": "GET:/contacts/single/timelogs",
    "name": "For contact",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/contacts/KUAAAAMU/timelogs",
    "params": {
      "createdDate": "{\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}",
      "trackedDate": "{\"start\":\"2019-11-07T12:57:54\",\"end\":\"2019-11-09T12:57:54\"}"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        },
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/contacts/KUAAAAMU/timelogs?createdDate={\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}&trackedDate={\"start\":\"2019-11-07T12:57:54\",\"end\":\"2019-11-09T12:57:54\"}'"
  },
  {
    "methodId": "GET:/folders/single/timelogs",
    "name": "In folder",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/timelogs",
    "params": {
      "createdDate": "{\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}",
      "trackedDate": "{\"equal\":\"2019-11-08\"}"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        },
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/timelogs?createdDate={\"start\":\"2019-11-07T09:57:54Z\",\"end\":\"2019-11-09T09:57:54Z\"}&trackedDate={\"equal\":\"2019-11-08\"}'"
  },
  {
    "methodId": "GET:/tasks/single/timelogs",
    "name": "In task",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/timelogs",
    "params": {
      "createdDate": "{\"end\":\"2019-11-09T09:57:54Z\"}",
      "trackedDate": "{\"start\":\"2019-11-07\",\"end\":\"2019-11-09\"}"
    },
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAN",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "userId": "KUAAAAMU",
          "hours": 11.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:54Z",
          "trackedDate": "2019-11-08",
          "comment": "New timelog comment"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/timelogs?createdDate={\"end\":\"2019-11-09T09:57:54Z\"}&trackedDate={\"start\":\"2019-11-07\",\"end\":\"2019-11-09\"}'"
  },
  {
    "methodId": "GET:/timelog_categories/empty",
    "name": "In all categories",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/timelog_categories",
    "params": {},
    "response": {
      "kind": "timelogCategories",
      "data": [
        {
          "id": "IEAAAAJ6OQAAAAAI",
          "name": "Category",
          "order": 0,
          "hidden": false
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelog_categories'"
  },
  {
    "methodId": "GET:/timelog_categories/single/timelogs",
    "name": "In category",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/timelog_categories/IEAAAAJ6OQAAAAAI/timelogs",
    "params": {},
    "response": {
      "kind": "timelogs",
      "data": [
        {
          "id": "IEAAAAJ6JQAAAAAO",
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "userId": "KUAAAAMU",
          "categoryId": "IEAAAAJ6OQAAAAAI",
          "hours": 10.0,
          "createdDate": "2019-11-08T09:57:52Z",
          "updatedDate": "2019-11-08T09:57:52Z",
          "trackedDate": "2019-11-08",
          "comment": "Test timelog"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelog_categories/IEAAAAJ6OQAAAAAI/timelogs'"
  },
  {
    "methodId": "GET:/comments/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/comments",
    "params": {
      "limit": "3",
      "plainText": "true"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6H",
          "authorId": "KUAAAAMU",
          "text": "Task comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        },
        {
          "id": "IEAAAAJ6IMAAAA6G",
          "authorId": "KUAAAAMU",
          "text": "Folder comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS"
        },
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "New task comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/comments?limit=3&plainText=true'"
  },
  {
    "methodId": "GET:/comments/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/comments/IEAAAAJ6IMAAAA6E,IEAAAAJ6IMAAAA6F",
    "params": {
      "plainText": "true"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "New task comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3",
          "attachmentIds": []
        },
        {
          "id": "IEAAAAJ6IMAAAA6E",
          "authorId": "KUAAAAMU",
          "text": "New folder comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS",
          "attachmentIds": []
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/comments/IEAAAAJ6IMAAAA6E,IEAAAAJ6IMAAAA6F?plainText=true'"
  },
  {
    "methodId": "GET:/folders/single/comments",
    "name": "In folder",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/comments",
    "params": {
      "plainText": "true"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6G",
          "authorId": "KUAAAAMU",
          "text": "Folder comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS"
        },
        {
          "id": "IEAAAAJ6IMAAAA6E",
          "authorId": "KUAAAAMU",
          "text": "New folder comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/comments?plainText=true'"
  },
  {
    "methodId": "GET:/tasks/single/comments",
    "name": "In task",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/comments",
    "params": {
      "plainText": "true"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6H",
          "authorId": "KUAAAAMU",
          "text": "Task comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        },
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "New task comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/comments?plainText=true'"
  },
  {
    "methodId": "GET:/comments/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/comments",
    "params": {
      "plainText": "true"
    },
    "response": {
      "kind": "comments",
      "data": [
        {
          "id": "IEAAAAJ6IMAAAA6H",
          "authorId": "KUAAAAMU",
          "text": "Task comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        },
        {
          "id": "IEAAAAJ6IMAAAA6G",
          "authorId": "KUAAAAMU",
          "text": "Folder comment",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "folderId": "IEAAAAJ6I4AB5CCS"
        },
        {
          "id": "IEAAAAJ6IMAAAA6F",
          "authorId": "KUAAAAMU",
          "text": "New task comment text",
          "updatedDate": "2019-11-08T09:57:52Z",
          "createdDate": "2019-11-08T09:57:52Z",
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/comments?plainText=true'"
  },
  {
    "methodId": "GET:/attachments/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS,IEAAAAJ6IYAB5BLT",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLS",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "taskId": "IEAAAAJ6KQAB5CC3"
        },
        {
          "id": "IEAAAAJ6IYAB5BLT",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "folderId": "IEAAAAJ6I4AB5CCS"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS,IEAAAAJ6IYAB5BLT'"
  },
  {
    "methodId": "GET:/folders/single/attachments",
    "name": "In folder",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS/attachments",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLT",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "folderId": "IEAAAAJ6I4AB5CCS"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS/attachments'"
  },
  {
    "methodId": "GET:/tasks/single/attachments",
    "name": "In task",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/attachments",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLU",
          "authorId": "KUAAAAMU",
          "name": "new_attachment.txt",
          "createdDate": "2019-11-08T09:57:53Z",
          "version": 2,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 22,
          "taskId": "IEAAAAJ6KQAB5CC3"
        },
        {
          "id": "IEAAAAJ6IYAB5BLV",
          "authorId": "KUAAAAMU",
          "name": "attachmen3.txt",
          "createdDate": "2019-11-08T09:57:54Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/attachments'"
  },
  {
    "methodId": "GET:/attachments/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/attachments",
    "params": {
      "createdDate": "{\"end\":\"2019-11-08T09:57:55Z\"}",
      "versions": "true"
    },
    "response": {
      "kind": "attachments",
      "data": [
        {
          "id": "IEAAAAJ6IYAB5BLS",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "taskId": "IEAAAAJ6KQAB5CC3",
          "currentAttachmentId": "IEAAAAJ6IYAB5BLU"
        },
        {
          "id": "IEAAAAJ6IYAB5BLT",
          "authorId": "KUAAAAMU",
          "name": "attachment.txt",
          "createdDate": "2019-11-08T09:57:52Z",
          "version": 1,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 18,
          "folderId": "IEAAAAJ6I4AB5CCS"
        },
        {
          "id": "IEAAAAJ6IYAB5BLU",
          "authorId": "KUAAAAMU",
          "name": "new_attachment.txt",
          "createdDate": "2019-11-08T09:57:53Z",
          "version": 2,
          "type": "Wrike",
          "contentType": "text/plain",
          "size": 22,
          "taskId": "IEAAAAJ6KQAB5CC3"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments?createdDate={\"end\":\"2019-11-08T09:57:55Z\"}&versions=true'"
  },
  {
    "methodId": "GET:/attachments/single/download",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS/download",
    "params": {},
    "response": "attachment content",
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS/download'"
  },
  {
    "methodId": "GET:/attachments/single/url",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS/url",
    "params": {},
    "response": {
      "kind": "url",
      "data": [
        {
          "url": "https://storage.www.wrike.com/extfile/eyJ0IjoiZmExIiwiYWxnIjoiSFMyNTYiLCJjdHkiOiJhcHBsaWNhdGlvblwvanNvbiJ9.eyJhIjozMTgsInIiOiJVUyIsImV4cCI6MTU3MzI5MzQ3NSwiaWF0IjoxNTczMjA3MDc1LCJqdGkiOiIyMDAwMjQyIn0.w_VyGCM-SbjguhCezgkCe2ffuN1l8MfJlzEf1RefjWU/attachment.txt"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS/url'"
  },
  {
    "methodId": "GET:/attachments/single/preview",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS/preview",
    "params": {
      "size": "w100"
    },
    "response": "PNG binary content",
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS/preview?size=w100'"
  },
  {
    "methodId": "GET:/dependencies/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ,IEAAAAJ6IUAB5CCZKMAB5CC2",
    "params": {},
    "response": {
      "kind": "dependencies",
      "data": [
        {
          "id": "IEAAAAJ6IUAB5CCZKMAB5CC2",
          "predecessorId": "IEAAAAJ6KQAB5CCZ",
          "successorId": "IEAAAAJ6KQAB5CC2",
          "relationType": "StartToStart"
        },
        {
          "id": "IEAAAAJ6IUAB5CC3KMAB5CCZ",
          "predecessorId": "IEAAAAJ6KQAB5CC3",
          "successorId": "IEAAAAJ6KQAB5CCZ",
          "relationType": "FinishToFinish"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ,IEAAAAJ6IUAB5CCZKMAB5CC2'"
  },
  {
    "methodId": "GET:/tasks/single/dependencies",
    "name": "In task",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/dependencies",
    "params": {},
    "response": {
      "kind": "dependencies",
      "data": [
        {
          "id": "IEAAAAJ6IUAB5CC3KMAB5CCZ",
          "predecessorId": "IEAAAAJ6KQAB5CC3",
          "successorId": "IEAAAAJ6KQAB5CCZ",
          "relationType": "FinishToFinish"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/dependencies'"
  },
  {
    "methodId": "GET:/version/empty",
    "name": "Current",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/version",
    "params": {},
    "response": {
      "kind": "version",
      "data": [
        {
          "major": 1,
          "minor": 0
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/version'"
  },
  {
    "methodId": "GET:/ids/empty",
    "name": "Task IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/ids",
    "params": {
      "ids": "[2000987,2000985]",
      "type": "ApiV2Task"
    },
    "response": {
      "kind": "ids",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CCZ",
          "apiV2Id": "2000985"
        },
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "apiV2Id": "2000987"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/ids?ids=[2000987,2000985]&type=ApiV2Task'"
  },
  {
    "methodId": "GET:/invitations/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/invitations",
    "params": {},
    "response": {
      "kind": "invitations",
      "data": [
        {
          "id": "IEAAAAJ6JEAAAAM5",
          "accountId": "IEAAAAJ6",
          "firstName": "Wrike",
          "lastName": "Bot",
          "email": "robot318automation@wrike-robot.com",
          "status": "Accepted",
          "inviterUserId": "KUAAAAMU",
          "invitationDate": "2019-11-08T09:57:53Z",
          "resolvedDate": "2019-11-08T09:57:53Z",
          "role": "Collaborator",
          "external": true
        },
        {
          "id": "IEAAAAJ6JEAAAAM4",
          "accountId": "IEAAAAJ6",
          "firstName": "First name",
          "lastName": "Last name",
          "email": "0shtquzqre@jakkymlzu8.com",
          "status": "Pending",
          "inviterUserId": "KUAAAAMU",
          "invitationDate": "2019-11-08T09:57:52Z",
          "role": "Collaborator",
          "external": true
        },
        {
          "id": "IEAAAAJ6JEAAAAM3",
          "accountId": "IEAAAAJ6",
          "email": "ky03kyzmnu@pg7lya7ca4.com",
          "status": "Accepted",
          "inviterUserId": "KUAAAAMU",
          "invitationDate": "2019-11-08T09:57:48Z",
          "resolvedDate": "2019-11-08T09:57:48Z",
          "role": "User",
          "external": true
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/invitations'"
  },
  {
    "methodId": "GET:/users/single",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/users/KUAAAAMU",
    "params": {},
    "response": {
      "kind": "users",
      "data": [
        {
          "id": "KUAAAAMU",
          "firstName": "Test",
          "lastName": "User",
          "type": "Person",
          "profiles": [
            {
              "accountId": "IEAAAAJ6",
              "email": "ky03kyzmnu@pg7lya7ca4.com",
              "role": "User",
              "external": false,
              "admin": false,
              "owner": true
            }
          ],
          "avatarUrl": "https://www.wrike.com/avatars//D7/A2/Box_ffffff00_84-84_v1.png",
          "timezone": "Europe/Moscow",
          "locale": "en",
          "deleted": false,
          "me": true
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/users/KUAAAAMU'"
  },
  {
    "methodId": "GET:/groups/single",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/groups/KX77775J",
    "params": {},
    "response": {
      "kind": "groups",
      "data": [
        {
          "id": "KX77775J",
          "accountId": "IEAAAAJ6",
          "title": "New test group",
          "memberIds": [
            "KUAAAAMU"
          ],
          "childIds": [
            "KX77775I"
          ],
          "parentIds": [
            "KX77775K"
          ],
          "avatarUrl": "/82/5B/Circle_ff73a419_78-71_v1.png"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/groups/KX77775J'"
  },
  {
    "methodId": "GET:/groups/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/groups",
    "params": {},
    "response": {
      "kind": "groups",
      "data": [
        {
          "id": "KX77775I",
          "accountId": "IEAAAAJ6",
          "title": "Test child group",
          "memberIds": [],
          "childIds": [],
          "parentIds": [
            "KX77775J"
          ],
          "avatarUrl": "/97/20/Circle_ffce93d8_84-67_v1.png"
        },
        {
          "id": "KX77775J",
          "accountId": "IEAAAAJ6",
          "title": "New test group",
          "memberIds": [
            "KUAAAAMU"
          ],
          "childIds": [
            "KX77775I"
          ],
          "parentIds": [
            "KX77775K"
          ],
          "avatarUrl": "/82/5B/Circle_ff73a419_78-71_v1.png"
        },
        {
          "id": "KX77775K",
          "accountId": "IEAAAAJ6",
          "title": "Test parent group",
          "memberIds": [],
          "childIds": [
            "KX77775J"
          ],
          "parentIds": [],
          "avatarUrl": "/93/19/Circle_ff9fa8da_84-80_v1.png"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/groups'"
  },
  {
    "methodId": "GET:/colors/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/colors",
    "params": {},
    "response": {
      "kind": "colors",
      "data": [
        {
          "name": "Brown",
          "hex": "#795548"
        },
        {
          "name": "Red",
          "hex": "#E91E63"
        },
        {
          "name": "Purple",
          "hex": "#9C27B0"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/colors'"
  },
  {
    "methodId": "GET:/customfields/multi",
    "name": "By IDs",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/customfields/IEAAAAJ6JUAAAAIG,IEAAAAJ6JUAAAAIF",
    "params": {},
    "response": {
      "kind": "customfields",
      "data": [
        {
          "id": "IEAAAAJ6JUAAAAIG",
          "accountId": "IEAAAAJ6",
          "title": "Test custom field",
          "type": "Text",
          "sharedIds": [],
          "settings": {
            "inheritanceType": "All"
          }
        },
        {
          "id": "IEAAAAJ6JUAAAAIF",
          "accountId": "IEAAAAJ6",
          "title": "New test custom field",
          "type": "Numeric",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "settings": {
            "inheritanceType": "All",
            "decimalPlaces": 2,
            "useThousandsSeparator": false,
            "aggregation": "Sum"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/customfields/IEAAAAJ6JUAAAAIG,IEAAAAJ6JUAAAAIF'"
  },
  {
    "methodId": "GET:/customfields/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/customfields",
    "params": {},
    "response": {
      "kind": "customfields",
      "data": [
        {
          "id": "IEAAAAJ6JUAAAAID",
          "accountId": "IEAAAAJ6",
          "title": "test 1",
          "type": "Text",
          "sharedIds": [],
          "settings": {
            "inheritanceType": "All"
          }
        },
        {
          "id": "IEAAAAJ6JUAAAAIE",
          "accountId": "IEAAAAJ6",
          "title": "test 2",
          "type": "Text",
          "sharedIds": [],
          "settings": {
            "inheritanceType": "All"
          }
        },
        {
          "id": "IEAAAAJ6JUAAAAIF",
          "accountId": "IEAAAAJ6",
          "title": "New test custom field",
          "type": "Numeric",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "settings": {
            "inheritanceType": "All",
            "decimalPlaces": 2,
            "useThousandsSeparator": false,
            "aggregation": "Sum"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/customfields'"
  },
  {
    "methodId": "GET:/customfields/empty",
    "name": "All",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/customfields",
    "params": {},
    "response": {
      "kind": "customfields",
      "data": [
        {
          "id": "IEAAAAJ6JUAAAAID",
          "accountId": "IEAAAAJ6",
          "title": "test 1",
          "type": "Text",
          "sharedIds": [],
          "settings": {
            "inheritanceType": "All"
          }
        },
        {
          "id": "IEAAAAJ6JUAAAAIE",
          "accountId": "IEAAAAJ6",
          "title": "test 2",
          "type": "Text",
          "sharedIds": [],
          "settings": {
            "inheritanceType": "All"
          }
        },
        {
          "id": "IEAAAAJ6JUAAAAIF",
          "accountId": "IEAAAAJ6",
          "title": "New test custom field",
          "type": "Numeric",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "settings": {
            "inheritanceType": "All",
            "decimalPlaces": 2,
            "useThousandsSeparator": false,
            "aggregation": "Sum"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/customfields'"
  },
  {
    "methodId": "GET:/data_export/empty",
    "name": "Last completed",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/data_export",
    "params": {},
    "response": {
      "kind": "dataExport",
      "data": [
        {
          "id": "IEAAAAJ6MUAAAAFX",
          "completedDate": "2019-11-08T09:57:55Z",
          "status": "Completed",
          "resources": [
            {
              "name": "attachment_file",
              "url": "https://storage.www.wrike.com/data_export/resource/2000246?accountId=318"
            },
            {
              "name": "audit_log",
              "url": "https://storage.www.wrike.com/data_export/resource/2000247?accountId=318"
            },
            {
              "name": "custom_field",
              "url": "https://storage.www.wrike.com/data_export/resource/2000248?accountId=318"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/data_export'"
  },
  {
    "methodId": "GET:/data_export/single",
    "name": "By ID",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/data_export/IEAAAAJ6MUAAAAFX",
    "params": {},
    "response": {
      "kind": "dataExport",
      "data": [
        {
          "id": "IEAAAAJ6MUAAAAFX",
          "completedDate": "2019-11-08T09:57:55Z",
          "status": "Completed",
          "resources": [
            {
              "name": "attachment_file",
              "url": "https://storage.www.wrike.com/data_export/resource/2000246?accountId=318"
            },
            {
              "name": "audit_log",
              "url": "https://storage.www.wrike.com/data_export/resource/2000247?accountId=318"
            },
            {
              "name": "custom_field",
              "url": "https://storage.www.wrike.com/data_export/resource/2000248?accountId=318"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/data_export/IEAAAAJ6MUAAAAFX'"
  },
  {
    "methodId": "POST:/data_export/empty",
    "name": "In account",
    "httpMethod": "POST",
    "requestUrl": "/api/v4/data_export",
    "params": {},
    "response": {
      "kind": "dataExport",
      "data": [
        {
          "id": "IEAAAAJ6MUAAAAFX",
          "completedDate": "2019-11-08T09:57:55Z",
          "status": "Completed",
          "resources": [
            {
              "name": "attachment_file",
              "url": "https://storage.www.wrike.com/data_export/resource/2000246?accountId=318"
            },
            {
              "name": "audit_log",
              "url": "https://storage.www.wrike.com/data_export/resource/2000247?accountId=318"
            },
            {
              "name": "custom_field",
              "url": "https://storage.www.wrike.com/data_export/resource/2000248?accountId=318"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X POST -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/data_export'"
  },
  {
    "methodId": "GET:/data_export_schema/empty",
    "name": "For actual version",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/data_export_schema",
    "params": {},
    "response": {
      "kind": "dataExportSchema",
      "data": [
        {
          "id": "attachment_file",
          "alias": "File attachment",
          "columns": [
            {
              "id": "attachment_file_id",
              "alias": "attachment_file_id",
              "dataType": "Number"
            },
            {
              "id": "attachment_file_api_id",
              "alias": "attachment_file_api_id",
              "dataType": "String"
            },
            {
              "id": "attachment_file_content_height",
              "alias": "attachment_file_content_height",
              "dataType": "Number"
            }
          ]
        },
        {
          "id": "audit_log",
          "alias": "Audit log",
          "columns": [
            {
              "id": "audit_log_id",
              "alias": "audit_log_id",
              "dataType": "Number"
            },
            {
              "id": "audit_log_object_id",
              "alias": "audit_log_object_id",
              "dataType": "Number"
            },
            {
              "id": "audit_log_object_title",
              "alias": "audit_log_object_title",
              "dataType": "String"
            }
          ]
        },
        {
          "id": "custom_field",
          "alias": "Custom field",
          "columns": [
            {
              "id": "custom_field_id",
              "alias": "custom_field_id",
              "dataType": "Number"
            },
            {
              "id": "custom_field_name",
              "alias": "custom_field_name",
              "dataType": "String"
            },
            {
              "id": "custom_field_type",
              "alias": "custom_field_type",
              "dataType": "String"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/data_export_schema'"
  },
  {
    "methodId": "GET:/data_export_schema/empty",
    "name": "For specific version",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/data_export_schema",
    "params": {
      "version": "V1"
    },
    "response": {
      "kind": "dataExportSchema",
      "data": [
        {
          "id": "attachment_file",
          "alias": "File attachment",
          "columns": [
            {
              "id": "attachment_file_id",
              "alias": "attachment_file_id",
              "dataType": "Number"
            },
            {
              "id": "attachment_file_api_id",
              "alias": "attachment_file_api_id",
              "dataType": "String"
            },
            {
              "id": "attachment_file_content_height",
              "alias": "attachment_file_content_height",
              "dataType": "Number"
            }
          ]
        },
        {
          "id": "audit_log",
          "alias": "Audit log",
          "columns": [
            {
              "id": "audit_log_id",
              "alias": "audit_log_id",
              "dataType": "Number"
            },
            {
              "id": "audit_log_object_id",
              "alias": "audit_log_object_id",
              "dataType": "Number"
            },
            {
              "id": "audit_log_object_title",
              "alias": "audit_log_object_title",
              "dataType": "String"
            }
          ]
        },
        {
          "id": "custom_field",
          "alias": "Custom field",
          "columns": [
            {
              "id": "custom_field_id",
              "alias": "custom_field_id",
              "dataType": "Number"
            },
            {
              "id": "custom_field_name",
              "alias": "custom_field_name",
              "dataType": "String"
            },
            {
              "id": "custom_field_type",
              "alias": "custom_field_type",
              "dataType": "String"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/data_export_schema?version=V1'"
  },
  {
    "methodId": "GET:/audit_log/empty",
    "name": "In account",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/audit_log",
    "params": {
      "operations": "[\"Oauth2AccessGranted\",\"InvitationSend\"]",
      "pageSize": "2",
      "eventDate": "{\"start\":\"2019-11-07T09:57:55Z\"}"
    },
    "response": {
      "kind": "auditLog",
      "nextPageToken": "AAAADFAAAAADYAAAAABAAAAABAAAAAACJJZOWPYAAADFA",
      "responseSize": 8,
      "data": [
        {
          "id": "IEAAAAJ6NQAAAA7H",
          "operation": "InvitationSend",
          "userId": "KUAAAAMU",
          "userEmail": "ky03kyzmnu@pg7lya7ca4.com",
          "eventDate": "2019-11-08T09:57:53Z",
          "ipAddress": "127.0.0.1",
          "objectType": "Invitation",
          "objectName": "robot318automation@wrike-robot.com",
          "objectId": "IEAAAAJ6JEAAAAM5",
          "details": {
            "User Role": "Collaborator"
          }
        },
        {
          "id": "IEAAAAJ6NQAAAA6U",
          "operation": "InvitationSend",
          "userId": "KUAAAAMU",
          "userEmail": "ky03kyzmnu@pg7lya7ca4.com",
          "eventDate": "2019-11-08T09:57:52Z",
          "ipAddress": "127.0.0.1",
          "objectType": "Invitation",
          "objectName": "0shtquzqre@jakkymlzu8.com",
          "objectId": "IEAAAAJ6JEAAAAM4",
          "details": {
            "User Role": "External_User"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/audit_log?operations=[\"Oauth2AccessGranted\",\"InvitationSend\"]&pageSize=2&eventDate={\"start\":\"2019-11-07T09:57:55Z\"}'"
  },
  {
    "methodId": "GET:/async_job/single",
    "name": "By id",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/async_job/IEAAAAJ6NJIXI6CUIVTUCYY",
    "params": {},
    "response": {
      "kind": "asyncJob",
      "data": [
        {
          "id": "IEAAAAJ6NJIXI6CUIVTUCYY",
          "status": "InQueue",
          "progressPercent": 0,
          "type": "CopyFolder"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/async_job/IEAAAAJ6NJIXI6CUIVTUCYY'"
  },
  {
    "methodId": "GET:/tasks/single/approvals",
    "name": "By task id",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3/approvals",
    "params": {},
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLV"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Pending"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3/approvals'"
  },
  {
    "methodId": "GET:/approvals/multi",
    "name": "By ids",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/approvals/IEAAAAJ6MEAAAAAN,IEAAAAJ6MEAAAAAO",
    "params": {},
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "",
          "updatedDate": "2019-11-08T09:57:55Z",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:55Z"
            }
          ],
          "attachmentIds": [],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAO",
          "status": "Pending"
        },
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLV"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Pending"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/approvals/IEAAAAJ6MEAAAAAN,IEAAAAJ6MEAAAAAO'"
  },
  {
    "methodId": "GET:/approvals/empty",
    "name": "Search approvals",
    "httpMethod": "GET",
    "requestUrl": "/api/v4/approvals",
    "params": {
      "pendingApprovers": "[\"KUAAAAMU\"]",
      "approvers": "[\"KUAAAAMU\"]",
      "statuses": "[\"Pending\"]",
      "pageSize": "10",
      "updatedDate": "{\"start\":\"2019-10-29T09:57:55Z\",\"end\":\"2019-11-18T09:57:55Z\"}"
    },
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CCZ",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "",
          "updatedDate": "2019-11-08T09:57:55Z",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:55Z"
            }
          ],
          "attachmentIds": [],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAO",
          "status": "Pending"
        },
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:54Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLV"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Pending"
        }
      ]
    },
    "curlCommand": "curl -g -X GET -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/approvals?pendingApprovers=[\"KUAAAAMU\"]&approvers=[\"KUAAAAMU\"]&statuses=[\"Pending\"]&pageSize=10&updatedDate={\"start\":\"2019-10-29T09:57:55Z\",\"end\":\"2019-11-18T09:57:55Z\"}'"
  },
  {
    "methodId": "DELETE:/approvals/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/approvals/IEAAAAJ6MEAAAAAN",
    "params": {},
    "response": {
      "kind": "approvals",
      "data": [
        {
          "taskId": "IEAAAAJ6KQAB5CC3",
          "authorId": "KUAAAAMU",
          "title": "",
          "description": "Test description",
          "updatedDate": "2019-11-08T09:57:55Z",
          "dueDate": "2019-11-08",
          "decisions": [
            {
              "approverId": "KUAAAAMU",
              "comment": "",
              "status": "Pending",
              "updatedDate": "2019-11-08T09:57:52Z"
            }
          ],
          "reviewId": "IEAAAAJ6LAAAAAAH",
          "attachmentIds": [
            "IEAAAAJ6IYAB5BLV"
          ],
          "type": "Regular",
          "id": "IEAAAAJ6MEAAAAAN",
          "status": "Cancelled"
        }
      ]
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/approvals/IEAAAAJ6MEAAAAAN'"
  },
  {
    "methodId": "DELETE:/dependencies/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ",
    "params": {},
    "response": {
      "kind": "dependencies",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/dependencies/IEAAAAJ6IUAB5CC3KMAB5CCZ'"
  },
  {
    "methodId": "DELETE:/attachments/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/attachments/IEAAAAJ6IYAB5BLS",
    "params": {},
    "response": {
      "kind": "attachments",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/attachments/IEAAAAJ6IYAB5BLS'"
  },
  {
    "methodId": "DELETE:/comments/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/comments/IEAAAAJ6IMAAAA6E",
    "params": {},
    "response": {
      "kind": "comments",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/comments/IEAAAAJ6IMAAAA6E'"
  },
  {
    "methodId": "DELETE:/timelogs/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/timelogs/IEAAAAJ6JQAAAAAN",
    "params": {},
    "response": {
      "kind": "timelogs",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/timelogs/IEAAAAJ6JQAAAAAN'"
  },
  {
    "methodId": "DELETE:/tasks/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/tasks/IEAAAAJ6KQAB5CC3",
    "params": {},
    "response": {
      "kind": "tasks",
      "data": [
        {
          "id": "IEAAAAJ6KQAB5CC3",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "description": "New description",
          "briefDescription": "New description",
          "parentIds": [
            "IEAAAAJ6I7777776"
          ],
          "superParentIds": [],
          "sharedIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "responsibleIds": [
            "KUAAAAMU"
          ],
          "status": "Deferred",
          "importance": "Low",
          "createdDate": "2019-11-08T09:57:51Z",
          "updatedDate": "2019-11-08T09:57:56Z",
          "dates": {
            "type": "Planned",
            "duration": 960,
            "start": "2019-11-08T09:00:00",
            "due": "2019-11-11T17:00:00"
          },
          "scope": "RbTask",
          "authorIds": [
            "KUAAAAMU"
          ],
          "customStatusId": "IEAAAAJ6JMAAAAAC",
          "hasAttachments": true,
          "attachmentCount": 2,
          "permalink": "https://www.wrike.com/open.htm?id=2000987",
          "priority": "00001000800000000000a200",
          "followedByMe": true,
          "followerIds": [
            "KUAAAAMU",
            "KUAAAAMV"
          ],
          "superTaskIds": [],
          "subTaskIds": [],
          "dependencyIds": [],
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            }
          ]
        }
      ]
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/tasks/IEAAAAJ6KQAB5CC3'"
  },
  {
    "methodId": "DELETE:/folders/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/folders/IEAAAAJ6I4AB5CCS",
    "params": {},
    "response": {
      "kind": "folders",
      "data": [
        {
          "id": "IEAAAAJ6I4AB5CCS",
          "accountId": "IEAAAAJ6",
          "title": "New title",
          "createdDate": "2019-11-08T09:57:50Z",
          "updatedDate": "2019-11-08T09:57:56Z",
          "description": "New description",
          "sharedIds": [
            "KUAAAAMU"
          ],
          "parentIds": [
            "IEAAAAJ6I7777776"
          ],
          "childIds": [
            "IEAAAAJ6I4AB5CCT",
            "IEAAAAJ6I4AB5CCU"
          ],
          "superParentIds": [],
          "scope": "RbFolder",
          "hasAttachments": false,
          "permalink": "https://www.wrike.com/open.htm?id=2000978",
          "workflowId": "IEAAAAJ6K77777WC",
          "metadata": [
            {
              "key": "testMetaKey",
              "value": "testMetaValue"
            }
          ],
          "customFields": [
            {
              "id": "IEAAAAJ6JUAAAAID",
              "value": "testValue"
            },
            {
              "id": "IEAAAAJ6JUAAAAIE",
              "value": "testValue"
            }
          ],
          "project": {
            "authorId": "KUAAAAMU",
            "ownerIds": [
              "KUAAAAMU"
            ],
            "status": "Red",
            "startDate": "2019-11-08",
            "endDate": "2019-11-15",
            "createdDate": "2019-11-08T09:57:53Z"
          }
        }
      ]
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/folders/IEAAAAJ6I4AB5CCS'"
  },
  {
    "methodId": "DELETE:/invitations/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/invitations/IEAAAAJ6JEAAAAM4",
    "params": {},
    "response": {
      "kind": "invitations",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/invitations/IEAAAAJ6JEAAAAM4'"
  },
  {
    "methodId": "DELETE:/groups/single",
    "name": "By ID",
    "httpMethod": "DELETE",
    "requestUrl": "/api/v4/groups/KX77775J",
    "params": {},
    "response": {
      "kind": "groups",
      "data": []
    },
    "curlCommand": "curl -g -X DELETE -H 'Authorization: bearer eyJ0dCI6InAiLCJhbGciOiJIUzI1NiIsInR2IjoiMSJ9.eyJkIjoie1wiYVwiOjMxOCxcImlcIjo4NixcImNcIjoxMDI1LFwidlwiOlwiXCIsXCJ1XCI6NDA0LFwiclwiOlwiVVNcIixcInNcIjpbXCJOXCIsXCJJXCIsXCJXXCIsXCJGXCIsXCJLXCIsXCJVXCIsXCJDXCIsXCJBXCIsXCJMXCJdLFwielwiOltdLFwidFwiOjE1NzMyMTA2NjkwMDB9IiwiZXhwIjoxNTczMjEwNjY5LCJpYXQiOjE1NzMyMDcwNjl9.BGC5fJGAONYnR_QoeDjz4MJLR3F9X-hOCu02VXCjo48' 'https://www.wrike.com/api/v4/groups/KX77775J'"
  }
];
        var biSchemaCsv = '	Data Type	Description	Primary Key	Foreign Key	Cardinality	Mandatory|attachment_file		Detailed information about file attachments				|attachment_file_id	Number	Unique ID of attached file	yes			yes|attachment_file_api_id	String	API ID of attached file. Can be used to reference file via REST API or in backup				yes|attachment_file_content_height	Number	Height of image/video (if applicable)				|attachment_file_content_width	Number	Width of image/video (if applicable)				|attachment_file_name	String	Name of the attachment				yes|attachment_file_size_bytes	Number	Size of the attachment in bytes				yes|user_id	Number	ID of user who attached the file		FK user(user_id)	N:1	yes|when_added	Date	Date when file was attached				yes|audit_log		User\'s operations log				|audit_log_id	Number	Unique ID of audit record	yes			yes|audit_log_object_id	Number	ID of referenced object, e.g. task				|audit_log_object_title	String	Name of referenced object, e.g. task				|audit_log_object_type	String	Type of referenced object				|audit_log_operation_change_json	String	JSON description of the change, containing additional attributes. The format depends on type of event				|audit_log_operation_origin_json	String	Deprecated. This attribute will be removed in future versions of the schema.  JSON description of the log record origin information				yes|audit_log_operation_origin_location_country	String	Country where the event originated				yes|audit_log_operation_origin_location_state	String	State where the event originated (if applicable)				|audit_log_operation_origin_user_time_zone	String	Time zone of the event				|audit_log_operation_time	Date	Time of the change in XXX				yes|audit_log_operation_type	String	Type of the event				yes|operator_user_id	Number	User that made the change (for user-initiated events)		FK user(user_id)	N:1	|custom_field		Сustom field definitions				|custom_field_id	Number	Unique ID of custom field definition	yes			yes|custom_field_name	String	Name of custom field				yes|custom_field_type	String	Type of custom field. Available values listed here: https://developers.wrike.com/documentation/api/methods/query-custom-fields				yes|when_added	Date	Date when the object was added				yes|when_removed	Date	Date when the object was removed. 3000-01-01 00:00:00 means that field is NOT deleted				yes|group		User groups				|group_id	Number	Unique ID of the group. Negative number	yes			yes|group_name	String	Name of the group				yes|when_added	Date	Date when the object was added				yes|when_removed	Date	Date when the object was removed. 3000-01-01 00:00:00 means that object is NOT deleted				yes|group_to_user		Users membership in groups				|group_id	Number	ID of the group	yes	FK group(group_id)	N:1	yes|is_admin	Boolean	Whether the user is group admin				yes|is_inherited	Boolean	Whether the membership is inherited (meaning that the user is member of the group because he/she is part of another group that contains this group)				yes|user_id	Number	ID of the user	yes	FK user(user_id)	N:1	yes|recurrence		Information about recurrent tasks				|recurrence_id	Number	Unique ID of recurrence	yes			yes|recurrence_interval_end_date	Date	Date when recurrence ends				|recurrence_interval_start_date	Date	Date when recurrence starts				yes|recurrence_name	String	Name of the recurrence				yes|recurrence_occurrence_limit	Number	Limit of tasks that will be created by this recurrence				|recurrence_schedule_frequency	Number	How often recurrence runs, in units defined by recurrence_schedule_type				yes|recurrence_schedule_type	String	Type of recurrence frequency. Possible values: Daily, Weekly, Monthly, Yearly				|recurrence_state	String	State of recurrence. Possible values: Running, RunnningInactive, Stopped				|timelog_category		Timelog categories				|timelog_category_id	Number	Unique ID of timelog category	yes			yes|timelog_category_name	String	Name of timelog category				yes|timelog_category_order	Number	Priority order of the category				yes|when_added	Date	Date when the object was added				yes|when_removed	Date	Date when the object was removed. 3000-01-01 00:00:00 means that object is NOT deleted				yes|workflow_id 	Number	Deprecated. This attribute will be removed in next versions of the schema. Always empty		FK workflow(workflow_id)		|user		Users				|user_id	Number	Unique user ID	yes			yes|email_address	String	User\'s primary email				yes|is_deactivated	Boolean	Whether the user was deactivated				yes|user_company	String	Company of the user				|user_department	String	Department of the user				|user_first_name	String	First name				yes|user_full_name	String	Full (first and last) name				yes|user_job_title	String	Job title				|user_last_name	String	Last name				yes|user_phone	String	Phone				|user_role	String	User\'s role. Possible values: Bot, Owner, Admin, User, External, Collaborator				yes|when_added	Date	Date when the object was added				yes|when_removed	Date	Date when the object was removed. 3000-01-01 00:00:00 means that object is NOT deleted				yes|work_assignee		Information about task assignees and project owners				|user_id 	Number	ID of the user that is assigned to task/project	yes	FK user(user_id)	N:1	yes|when_added	Date	Date when the object was added				yes|work_id 	Number	ID of project/task that has the assignee	yes	FK work_item(work_id)	N:1	yes|work_attachment		Attaches for tasks, projects, folders				|work_attachment_id	Number	Unique ID of attachment	yes			yes|user_id 	Number	ID of user that has added the first version of the attachment		FK user(user_id)	N:1	yes|when_added	Date	Date when the object was added				yes|work_id 	Number	ID of work item (folder, project, task) that has the attachment		FK work_item(work_id)	N:1	yes|work_attachment_to_attachment_file		Versions of task/folder/project attachments				|attachment_file_id 	Number	ID of the file	yes	FK attachment_file(attachment_file_id)	1:1	yes|attachment_version	Number	Version of the file				yes|user_id 	Number	ID of user that has added this version of the attachment		FK user(user_id)	N:1	yes|when_added	Date	Date when the attachment was added in the comment				yes|work_attachment_id 	Number	ID of the attachment	yes	FK work_attachment(work_attachment_id)		yes|work_comment_id 	Number	Comment where the task was attached		FK work_comment(work_comment_id)	N:1	yes|work_change_revision		Change revisions (status, title, description etc.) of tasks, projects, and folders 				|work_change_revision_id	Number	Unique ID of the revision	yes			yes|user_id	Number	User that made change		FK user(user_id)	N:1	yes|when_work_changed	Date	Date when change was made				yes|work_id	Number	ID of work item (folder, project, task) that was changed		FK work_item(work_id)	N:1	yes|work_comment		Information about comments in tasks, projects and folders				|work_comment_id	Number	Unique ID of the comment	yes			yes|user_id	Number	ID of user that made comment		FK user(user_id)	N:1	yes|when_comment_created	Date	When comment was made				yes|work_id	Number	ID of work item (folder, project, task) that was commented		FK work_item(work_id)	N:1	yes|work_comment_content		Comment contents in tasks, projects, and folders				|work_comment_id 	Number	ID of the comment	yes	FK work_comment(work_comment_id)	1:1	yes|work_comment_text	String	Comment text				yes|work_comment_to_mention		Mentions of groups and users in comments				|group_id 	Number	ID of mentioned group in the comment. empty if user was mentioned	yes	FK group(group_id)	N:1	|user_id 	Number	ID of mentioned user in the comment. empty if group was mentioned	yes	FK user(user_id)	N:1	|work_comment_id 	Number	ID of comment that has the mention	yes	FK work_comment(work_comment_id)	N:1	yes|work_custom_field		Custom field values				|custom_field_id 	Number	ID of custom field definition	yes	FK custom_field(custom_field_id)	N:1	yes|custom_field_value	String	Custom field value	yes			|work_id 	Number	ID of work item (folder, project, task) that has custom field	yes	FK work_item(work_id)	N:1	yes|work_custom_field_history		Change history of task custom fields values				|change_datetime	Date	Date when field was changed	yes			yes|custom_field_id 	Number	ID of custom field definition	yes	FK custom_field(custom_field_id)	N:1	yes|new_custom_field_value	String	New value				|old_custom_field_value	String	Old value				|user_resource_id 	Number	ID of user that made the change	yes	FK user(user_id)	N:1	yes|work_id 	Number	ID of work item (folder, project, task) that has custom field	yes	FK work_item(work_id)	N:1	yes|work_description		Task/project/folder descriptions in HTML format				|work_id 	Number	ID of work item (folder, project, task)	yes	FK work_item(work_id)	1:1	yes|work_description_html	String	Description of work item in HTML format: https://developers.wrike.com/documentation/api/datatypes/description				|work_folder		Detailed information about folders				|work_id 	Number	Unique ID of the folder	yes	FK work_item(work_id)	1:1	yes|folder_default_workflow_stage_id 	Number	Deprecated. This attribute will be removed in future versions of the schema.  Default status for newly created tasks in this folder		FK workflow_stage(workflow_stage_id)		|workflow_id 	Number	ID of folder\'s default workflow		FK workflow(workflow_id)		yes|work_graph		Information about parent and child relationships of projects, folders and tasks				|nested_work_id 	Number	Child work id	yes	FK work_item(work_id)	N:1	yes|when_added	Date	Date when the relation was added				yes|work_id 	Number	Parent work id	yes	FK work_item(work_id)	N:1	yes|work_item		Base information for tasks, projects, and folders				|work_id	Number	ID of work item (folder, project, task)	yes			yes|author_user_id 	Number	ID of user which created the item		FK user(user_id)	N:1	yes|when_created	Date	When the item was created				yes|when_updated_last_time	Date	Last update time				yes|work_deleted_state	String	Whether the item is deleted. Possible values: Actual, Deleted				yes|work_name	String	Name of the item				yes|work_type	String	Type of the item. Possible values: Folder, Project, Task				yes|work_project		Detailed information about projects				|work_id	Number	Unique ID of the project	yes	FK work_folder(work_id)	1:1	yes|project_health_status	String	Status of the project. Possible values: Greed, Yellow, Red, OnHold, Cancelled, Completed				yes|project_planned_due_date	Date	Planned project end date				|project_planned_start_date	Date	Planned project start date				|when_project_created	Date	Deprecated. This attribute will be removed in future versions of the schema. date when project was created (similar to when_created in work_item)				yes|workflow_stage_id 	Number	Status of the task		FK workflow_stage(workflow_stage_id)	N:1	|billing_type_id	Number	Billing type of the project				|work_project_to_task		Relationships between projects and tasks (for any level of nesting)				|depth_level	Number	Level of nesting (e.g. 1 if task is directly created in the project)				yes|work_project_id 	Number	ID of the project	yes	FK work_item(work_id)	N:1	yes|work_task_id 	Number	ID of the task	yes	FK work_item(work_id)	N:1	yes|work_space		Information about spaces				|work_id	Number	Unique ID of the task	yes	FK work_folder(work_id)	1:1	yes|access_type	String	Space access type. Possible values: Private, Public, Personal				yes|work_space_user		Information about users of spaces				|space_id	Number	Id of space	yes	FK work_space(work_id)	N:1	|user_id	Number	Id of user	yes	FK user(user_id)	N:1	|user_role	String	Space user role. Possible values: Guest, Member, Manager, UserLeft				yes|work_task		Detailed information about tasks				|work_id	Number	Unique ID of the task	yes	FK work_item(work_id)	1:1	yes|effort	Number	Planned effort in minutes				|effort_mode	String	Effort type. Possible values: Fulltime, Basic				|recurrence_id 	Number	ID of recurrence set on the task		FK recurrence(recurrence_id)	1:1	|task_completed_date	Date	When task was completed				|task_duration_days	Number	Duration of task in days				|task_importance	String	Task importance. Possible values: Normal, High, Low				yes|task_planned_due_date	Date	Planned end date				|task_planned_start_date	Date	Planned start date				|task_planning_type	String	Planning type. Possible values: Planned, Backlog, Milestone				yes|task_workflow_stage_group	String	Status group of the task. Possible values: Active, Completed, Deferred, Cancelled				yes|workflow_stage_id 	Number	Status of the task		FK workflow_stage(workflow_stage_id)	N:1	yes|billing_type_id	Number	Billing type of the task				|work_task_dependency		Task dependencies				|dependency_type	String	Dependency type. Possible values described here: https://developers.wrike.com/documentation/api/methods/query-dependencies				yes|predecessor_task_work_id 	Number	ID of predecessor task	yes	FK work_task(work_id)	N:1	yes|successor_task_work_id	Number	ID of successor task	yes	FK work_task(work_id)	N:1	yes|user_id 	Number	ID of user that created the dependency		FK user(user_id)	N:1	yes|when_added	Date	Date when the dependency was added				yes|work_timelog		Time logged for tasks				|work_timelog_id	Number	Unique ID of timelog	yes			yes|timelog_category_id 	Number	ID of timelog category		FK timelog_category(timelog_category_id)	N:1	|timelog_datetime	Date	When time was logged				yes|timelog_minutes	Number	Amount of logged time in minutes				yes|user_id 	Number	User that logged time		FK user(user_id)	N:1	yes|when_added	Date	Date when the timelog was added				yes|work_id 	Number	Task that has the timelog		FK work_task(work_id)	N:1	yes|work_timelog_comment		Comments for timelogs				|work_timelog_id 	Number	ID of timelog	yes	FK work_timelog(work_timelog_id)	1:1	yes|timelog_comment_text	String	Timelog comment				|work_workflow_stage_history		History of task status changes				|change_datetime	Date	When the status was changed	yes			yes|new_workflow_stage_id 	Number	New status		FK workflow_stage(workflow_stage_id)	N:1	yes|old_workflow_stage_id 	Number	Old status		FK workflow_stage(workflow_stage_id)	N:1	yes|user_id 	Number	User who changed status	yes	FK user(user_id)	N:1	yes|work_id 	Number	Task ID	yes	FK work_item(work_id)	N:1	yes|workflow		Workflows				|workflow_id	Number	ID of workflow	yes			yes|is_strict_workflow	Boolean	Whether the workflow has locked transtitions				yes|when_added	Date	Date when the object was added				yes|when_removed	Date	Date when the object was removed. 3000-01-01 00:00:00 means that object is NOT deleted				yes|workflow_name	String	Workflow name				yes|workflow_stage		Worklow statuses				|workflow_stage_id	Number	Unique ID of workflow status	yes			yes|when_added	Date	Date when the stage was added				yes|when_removed	Date	Date when the stage was removed. 3000-01-01 00:00:00 means that stage is NOT deleted				yes|workflow_id 	Number	ID of workflow		FK workflow(workflow_id)	N:1	yes|workflow_stage_color	String	Color of the status. Possible values described here: https://developers.wrike.com/documentation/api/methods/query-workflows				yes|workflow_stage_group	String	Group of the status. Possible values described here: https://developers.wrike.com/documentation/api/methods/query-workflows				yes|workflow_stage_name	String	Name of the status				yes|workflow_stage_order	Number	Order of the status				yes|work_task_flexible_effort		Flexible effort for task				|work_task_id	Number		yes	FK work_task(work_id)	N:1	yes|user_id	Number	User id 				|date	Date					|effort_minutes	Number					';
    