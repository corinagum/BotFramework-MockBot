// This sample is borrowed from the AdaptiveCards repo
// https://github.com/microsoft/AdaptiveCards/blob/main/samples/v1.3/Scenarios/ShowCardWizard.json

export default () => ({
  type: 'AdaptiveCard',
  version: '1.0',
  body: [
    {
      type: 'TextBlock',
      text: 'Please provide the following information:',
      wrap: true
    }
  ],
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  actions: [
    {
      type: 'Action.ShowCard',
      title: '1. Name',
      card: {
        type: 'AdaptiveCard',
        $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
        body: [
          {
            type: 'Container',
            id: 'nameProperties',
            items: [
              {
                type: 'Input.Text',
                label: 'First Name',
                id: 'FirstName',
                isRequired: true,
                errorMessage: 'First Name is required'
              },
              {
                type: 'Input.Text',
                label: 'Middle Name',
                id: 'MiddleName'
              },
              {
                type: 'Input.Text',
                label: 'Last Name',
                id: 'LastName',
                isRequired: true,
                errorMessage: 'Last Name is required'
              }
            ]
          }
        ],
        actions: [
          {
            type: 'Action.ShowCard',
            title: '2. Address',
            card: {
              type: 'AdaptiveCard',
              $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
              body: [
                {
                  type: 'Container',
                  id: 'addressProperties',
                  items: [
                    {
                      type: 'Input.Text',
                      label: 'Address line 1',
                      id: 'AddressLine1'
                    },
                    {
                      type: 'Input.Text',
                      label: 'Address line 2',
                      id: 'AddressLine2'
                    },
                    {
                      type: 'ColumnSet',
                      columns: [
                        {
                          type: 'Column',
                          width: 'stretch',
                          items: [
                            {
                              type: 'Input.Text',
                              label: 'City',
                              id: 'City'
                            }
                          ]
                        },
                        {
                          type: 'Column',
                          width: 'stretch',
                          items: [
                            {
                              type: 'Input.Text',
                              label: 'State',
                              id: 'State'
                            }
                          ]
                        },
                        {
                          type: 'Column',
                          width: 'stretch',
                          items: [
                            {
                              type: 'Input.Text',
                              label: 'Zip Code',
                              id: 'Zip'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              actions: [
                {
                  type: 'Action.ShowCard',
                  title: '3. Phone/Email',
                  card: {
                    type: 'AdaptiveCard',
                    $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                    body: [
                      {
                        type: 'Input.Text',
                        label: 'Cell Number',
                        id: 'CellPhone'
                      },
                      {
                        type: 'Input.Text',
                        label: 'Home Number',
                        id: 'HomePhone'
                      },
                      {
                        type: 'Input.Text',
                        label: 'Email Address',
                        id: 'Email'
                      }
                    ],
                    actions: [
                      {
                        type: 'Action.Submit',
                        title: 'Submit'
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
});