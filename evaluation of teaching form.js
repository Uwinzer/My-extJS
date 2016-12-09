Ext.application({
    name: 'Fiddle',

    launch: function () {
        Ext.application({
            name: 'Fiddle',

            launch: function () {
                Ext.create('Ext.container.Viewport', {

                    scrollable: true,

                    margin: 20,
                    items: [{
                        xtype: 'container',

                        layout: {
                            type: 'hbox',
                            align: 'center',
                            pack: 'center'
                        },

                        items: [{
                            xtype: 'form',

                            maxWidth: 700,
                            flex: 1,

                            bodyPadding: 20,
                            title: 'Student evaluation teaching form ',
                            items: [{
                                xtype: 'fieldcontainer',
                                layout: 'hbox',

                                fieldLabel: 'Instructor Name',
                                combineErrors: true,

                                defaultType: 'textfield',

                                defaults: {
                                    allowBlank: false,
                                    flex: 1
                                },

                                items: [{
                                    name: 'firstName',
                                    emptyText: 'First Name'
                                }, {
                                    name: 'lastName',
                                    margin: '0 0 0 5',
                                    emptyText: 'Last Name'
                                }]
                            }, {
                                xtype: 'datefield',
                                fieldLabel: 'Date of evaluation',
                                name: 'dob',
                                maxValue: new Date()
                            }, {
                                xtype: 'radiogroup',
                                fieldLabel: 'presented material in an organised',
                                vertical: false,

                                items: [{
                                    boxLabel: 'Extremely Poor',
                                    name: 'rb',
                                    inputValue: '1'
                                }, {
                                    boxLabel: 'Very Poor',
                                    name: 'rb',
                                    inputValue: '2'
                                }, {
                                    boxLabel: 'Poor',
                                    name: 'rb',
                                    inputValue: '3'
                                }, {
                                    boxLabel: 'Adequate',
                                    name: 'rb',
                                    inputValue: '4'
                                }, {
                                    boxLabel: 'Good',
                                    name: 'rb',
                                    inputValue: '5'
                                }, {
                                    boxLabel: 'Very Good',
                                    name: 'rb',
                                    inputValue: '6'
                                }, {
                                    boxLabel: 'Outstanding',
                                    name: 'rb',
                                    inputValue: '7'
                                }, {
                                    boxLabel: 'NA',
                                    name: 'rb',
                                    inputValue: '8'
                                }]

                            }, {
                                xtype: 'radiogroup',
                                fieldLabel: 'used instructional time well',
                                vertical: false,

                                items: [{
                                    boxLabel: 'Extremely Poor',
                                    name: 'rb',
                                    inputValue: '1'
                                }, {
                                    boxLabel: 'Very Poor',
                                    name: 'rb',
                                    inputValue: '2'
                                }, {
                                    boxLabel: 'Poor',
                                    name: 'rb',
                                    inputValue: '3'
                                }, {
                                    boxLabel: 'Adequate',
                                    name: 'rb',
                                    inputValue: '4'
                                }, {
                                    boxLabel: 'Good',
                                    name: 'rb',
                                    inputValue: '5'
                                }, {
                                    boxLabel: 'Very Good',
                                    name: 'rb',
                                    inputValue: '6'
                                }, {
                                    boxLabel: 'Outstanding',
                                    name: 'rb',
                                    inputValue: '7'
                                }, {
                                    boxLabel: 'NA',
                                    name: 'rb',
                                    inputValue: '8'
                                }]

                            }, {
                                xtype: 'radiogroup',
                                fieldLabel: 'explained content clearly',
                                vertical: false,

                                items: [{
                                    boxLabel: 'Extremely Poor',
                                    name: 'rb',
                                    inputValue: '1'
                                }, {
                                    boxLabel: 'Very Poor',
                                    name: 'rb',
                                    inputValue: '2'
                                }, {
                                    boxLabel: 'Poor',
                                    name: 'rb',
                                    inputValue: '3'
                                }, {
                                    boxLabel: 'Adequate',
                                    name: 'rb',
                                    inputValue: '4'
                                }, {
                                    boxLabel: 'Good',
                                    name: 'rb',
                                    inputValue: '5'
                                }, {
                                    boxLabel: 'Very Good',
                                    name: 'rb',
                                    inputValue: '6'
                                }, {
                                    boxLabel: 'Outstanding',
                                    name: 'rb',
                                    inputValue: '7'
                                }, {
                                    boxLabel: 'NA',
                                    name: 'rb',
                                    inputValue: '8'
                                }]
                            }, {
                                xtype: 'radiogroup',
                                fieldLabel: 'was clear and effective speaker',
                                vertical: false,
                                items: [{
                                    boxLabel: 'Extremely Poor',
                                    name: 'rb',
                                    inputValue: '1'
                                }, {
                                    boxLabel: 'Very Poor',
                                    name: 'rb',
                                    inputValue: '2'
                                }, {
                                    boxLabel: 'Poor',
                                    name: 'rb',
                                    inputValue: '3'
                                }, {
                                    boxLabel: 'Adequate',
                                    name: 'rb',
                                    inputValue: '4'
                                }, {
                                    boxLabel: 'Good',
                                    name: 'rb',
                                    inputValue: '5'
                                }, {
                                    boxLabel: 'Very Good',
                                    name: 'rb',
                                    inputValue: '6'
                                }, {
                                    boxLabel: 'Outstanding',
                                    name: 'rb',
                                    inputValue: '7'
                                }, {
                                    boxLabel: 'NA',
                                    name: 'rb',
                                    inputValue: '8'
                                }]

                            }, {
                                xtype: 'textareafield',
                                fieldLabel: 'Comments',
                                labelAlign: 'top',
                                name: 'comments',
                                width: 400,
                                height: 100
                            }],

                            buttons: [{
                                text: 'Submit',
                                handler: function () {
                                    var form = this.up('form').getForm();
                                    if (form.isValid()) {
                                        form.submit({
                                            url: 'cutomer/feedback',
                                            success: function () {

                                            },
                                            failure: function () {

                                            }
                                        });
                                    } else {
                                        Ext.Msg.alert('Error', 'Fix the errors in the form')
                                    }
                                }
                            }]
                        }]
                    }]

                });
            }
        });

    }
});
