﻿using Shesha.Domain;
using Shesha.Settings;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Shesha.Configuration
{
    /// <summary>
    /// Shesha settings
    /// </summary>
    public interface ISheshaSettings : ISettingAccessors
    {
        /// <summary>
        /// Upload folder for stored files (<see cref="StoredFile"/>) 
        /// </summary>
        [Display(Name = "Upload Folder", Description = "Upload folder for stored files", GroupName = "General")]
        [Setting(SheshaSettingNames.UploadFolder)]
        ISettingAccessor<string> UploadFolder { get; }

        [Display(Name = "Dev Mode", Description = "Enables development mode for some parts of the UI", GroupName = "General")]
        [Setting(SheshaSettingNames.DevMode)]
        ISettingAccessor<bool> DevMode { get; }

    }
}
