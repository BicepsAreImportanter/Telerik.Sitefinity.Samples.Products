﻿/// <reference name="MicrosoftAjax.js"/>
/// <reference name="Telerik.Sitefinity.Resources.Scripts.jquery-1.4.2-vsdoc.js" assembly="Telerik.Sitefinity.Resources"/>
Type.registerNamespace("ProductCatalogSample.Web.Controls");

ProductCatalogSample.Web.Controls.TaxonomyDropDownField = function (element) {

    ProductCatalogSample.Web.Controls.TaxonomyDropDownField.initializeBase(this, [element]);
}

ProductCatalogSample.Web.Controls.TaxonomyDropDownField.prototype =
{


    initialize: function () {
        ProductCatalogSample.Web.Controls.TaxonomyDropDownField.callBaseMethod(this, "initialize");
    },

    // Gets the value of the field control.
    // If a single item is selected returns the value, otherwise of more that one is selected
    // returns an arrawy with the selected values
    get_value: function () {

        if (this.get_displayMode() == Telerik.Sitefinity.Web.UI.Fields.FieldDisplayMode.Write) {
            var result = this._get_selectedItemsValues();
            if (Array.prototype.isPrototypeOf(result)) {
                return result;
            }
            return [];
        }
        return this._value;
    },

    isChanged: function () {

        if (this._value == null) this._value = [];
        var newValue = this.get_value();
        var maxi = 0;
        var changed = false;

        if (newValue != null) {
            if (this._value.length == newValue.length) {

                while (this._value[maxi]) {

                    var originalValue = this._value[maxi];
                    var found = false;
                    var i = 0;
                    while (newValue[i]) {
                        var currentValue = newValue[i];
                        if (originalValue == currentValue) {
                            found = true;
                            break;
                        }
                        i++;
                    }
                    if (!found) {
                        return true;
                    }
                    maxi++;
                }

            } else {
                changed = true;
            }
        }
        return changed;
    }


}

ProductCatalogSample.Web.Controls.TaxonomyDropDownField.registerClass('ProductCatalogSample.Web.Controls.TaxonomyDropDownField', Telerik.Sitefinity.Web.UI.Fields.ChoiceField);