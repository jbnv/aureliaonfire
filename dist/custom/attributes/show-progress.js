System.register(['aurelia-framework', 'nprogress'], function (_export) {
  'use strict';

  var inject, customAttribute, NProgress, ShowProgress;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_nprogress) {
      NProgress = _nprogress['default'];
    }],
    execute: function () {
      ShowProgress = (function () {
        function ShowProgress(element) {
          _classCallCheck(this, _ShowProgress);

          this.element = element;
          NProgress.configure({ showSpinner: false });
        }

        _createClass(ShowProgress, [{
          key: 'valueChanged',
          value: function valueChanged(newValue) {
            if (newValue) {
              NProgress.start();
            } else {
              NProgress.done();
            }
          }
        }]);

        var _ShowProgress = ShowProgress;
        ShowProgress = inject(Element)(ShowProgress) || ShowProgress;
        ShowProgress = customAttribute('show-progress')(ShowProgress) || ShowProgress;
        return ShowProgress;
      })();

      _export('ShowProgress', ShowProgress);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS9hdHRyaWJ1dGVzL3Nob3ctcHJvZ3Jlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzBDQUthLFlBQVk7Ozs7Ozs7O2lDQUxqQixNQUFNOzBDQUFFLGVBQWU7Ozs7O0FBS2xCLGtCQUFZO0FBQ1osaUJBREEsWUFBWSxDQUNYLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLG1CQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDM0M7O3FCQUpVLFlBQVk7O2lCQU1YLHNCQUFDLFFBQVEsRUFBRTtBQUNyQixnQkFBSSxRQUFRLEVBQUU7QUFDWix1QkFBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ25CLE1BQU07QUFDTCx1QkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xCO1dBQ0Y7Ozs0QkFaVSxZQUFZO0FBQVosb0JBQVksR0FEeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFlBQVksS0FBWixZQUFZO0FBQVosb0JBQVksR0FGeEIsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUVwQixZQUFZLEtBQVosWUFBWTtlQUFaLFlBQVkiLCJmaWxlIjoiY3VzdG9tL2F0dHJpYnV0ZXMvc2hvdy1wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBjdXN0b21BdHRyaWJ1dGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnc2hvdy1wcm9ncmVzcycpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNob3dQcm9ncmVzcyB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoe3Nob3dTcGlubmVyOiBmYWxzZX0pO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
