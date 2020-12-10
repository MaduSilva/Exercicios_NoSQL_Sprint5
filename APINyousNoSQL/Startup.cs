using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APINyousNoSQL.Contexts;
using APINyousNoSQL.Interfaces.Repositories;
using APINyousNoSQL.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace APINyousNoSQL
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Pega as informações do appsettings
            services.Configure<NyousDatabaseSettings>(
                Configuration.GetSection(nameof(NyousDatabaseSettings)));

            // Injeção de dependencia
            services.AddSingleton<INyousDatabaseSettings>(sp =>
                sp.GetRequiredService<IOptions<NyousDatabaseSettings>>().Value);


            //Injeção de dependência repositório
            services.AddSingleton<IEventoRepository, EventoRepository>();
            
            services.AddControllers();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
